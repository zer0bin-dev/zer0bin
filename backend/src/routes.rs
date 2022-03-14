use actix_web::{
    get, post,
    web::{self},
    HttpResponse, Responder,
};

use chrono::Duration;

use nanoid::nanoid;
use sqlx::{postgres::PgRow, types::chrono::Utc, Row};

use crate::{
    models::{
        ApiError, ApiResponse, GetPasteResponse, GetStatsResponse, NewPasteResponse, PartialPaste,
        Paste,
    },
    AppState,
};

#[get("/s")]
pub async fn get_stats(state: web::Data<AppState>) -> impl Responder {
    // TODO: Maybe there's a less hacky way to do this..?
    let count: Result<i64, sqlx::Error> = sqlx::query(r#"SELECT COUNT(*) FROM pastes"#)
        .try_map(|row: PgRow| row.try_get::<i64, _>("count"))
        .fetch_one(&state.pool)
        .await;

    if let Err(e) = count {
        eprintln!("Error occurred while retrieving paste count: {:?}", e);

        return HttpResponse::InternalServerError().json(ApiResponse {
            success: false,
            data: ApiError {
                message: "Error occurred while retrieving paste count, please try again."
                    .to_string(),
            },
        });
    }

    HttpResponse::Ok().json(ApiResponse {
        success: true,
        data: GetStatsResponse {
            count: count.unwrap(),
        },
    })
}

#[get("/{id}")]
pub async fn get_paste(state: web::Data<AppState>, id: web::Path<String>) -> impl Responder {
    let id = id.into_inner();

    let res: Result<Paste, sqlx::Error> =
        sqlx::query_as::<_, Paste>(r#"SELECT * FROM pastes WHERE "id" = $1"#)
            .bind(id.clone())
            .fetch_one(&state.pool)
            .await;

    match res {
        Ok(p) => {
            // this may be worth handling at some point..
            let _ = sqlx::query(r#"UPDATE pastes SET "views" = "views" + 1 WHERE "id" = $1"#)
                .bind(id.clone())
                .execute(&state.pool)
                .await;

            HttpResponse::Ok().json(ApiResponse {
                success: true,
                data: GetPasteResponse {
                    id: p.id,
                    content: p.content,
                    views: p.views + 1,
                    expires_at: p.expires_at,
                },
            })
        }
        Err(e) => match e {
            sqlx::Error::RowNotFound => {
                return HttpResponse::InternalServerError().json(ApiResponse {
                    success: false,
                    data: ApiError {
                        message: format!("Paste {id} wasnt found."),
                    },
                });
            }
            _ => {
                eprintln!("Error occurred while getting paste: {:?}", e);

                HttpResponse::InternalServerError().json(ApiResponse {
                    success: false,
                    data: ApiError {
                        message: "Unknown error occurred, please try again.".to_string(),
                    },
                })
            }
        },
    }
}

#[get("/r/{id}")]
pub async fn get_raw_paste(state: web::Data<AppState>, id: web::Path<String>) -> impl Responder {
    let id = id.into_inner();

    let res: Result<Paste, sqlx::Error> =
        sqlx::query_as::<_, Paste>(r#"SELECT * FROM pastes WHERE "id" = $1"#)
            .bind(id.clone())
            .fetch_one(&state.pool)
            .await;

    match res {
        Ok(p) => {
            // this may be worth handling at some point..
            let _ = sqlx::query(r#"UPDATE pastes SET "views" = "views" + 1 WHERE "id" = $1"#)
                .bind(id.clone())
                .execute(&state.pool)
                .await;

            HttpResponse::Ok().body(p.content)
        }
        Err(e) => match e {
            sqlx::Error::RowNotFound => {
                return HttpResponse::InternalServerError().json(ApiResponse {
                    success: false,
                    data: ApiError {
                        message: format!("Paste {id} wasnt found."),
                    },
                });
            }
            _ => {
                eprintln!("Error occurred while getting paste: {:?}", e);

                HttpResponse::InternalServerError().json(ApiResponse {
                    success: false,
                    data: ApiError {
                        message: "Unknown error occurred, please try again.".to_string(),
                    },
                })
            }
        },
    }
}

#[post("/n")]
pub async fn new_paste(
    state: web::Data<AppState>,
    data: web::Json<PartialPaste>,
) -> impl Responder {
    if data.content.is_empty() || data.content.len() > state.config.pastes.character_limit {
        let character_limit = state.config.pastes.character_limit;

        return HttpResponse::BadRequest().json(ApiResponse {
            success: false,
            data: ApiError {
                message: format!("Maximum file length exceeded, maximum is {character_limit} characters. Or the content is blank.."),
            },
        });
    }

    let length = state.config.pastes.id_length;
    let id = nanoid!(length);

    let expires_at = if state.config.pastes.days_til_expiration == -1 {
        None
    } else {
        Some(Utc::now() + Duration::days(state.config.pastes.days_til_expiration))
    };

    let res =
        sqlx::query(r#"INSERT INTO pastes("id", "content", "expires_at") VALUES ($1, $2, $3)"#)
            .bind(id.clone())
            .bind(data.content.clone())
            .bind(expires_at)
            .execute(&state.pool)
            .await;

    match res {
        Ok(_) => HttpResponse::Ok().json(ApiResponse {
            success: true,
            data: NewPasteResponse {
                id,
                content: data.content.clone(),
            },
        }),
        Err(e) => {
            eprintln!("Error occurred while creating paste: {:?}", e);

            HttpResponse::InternalServerError().json(ApiResponse {
                success: false,
                data: ApiError {
                    message: "Unknown error occurred, please try again.".to_string(),
                },
            })
        }
    }
}
