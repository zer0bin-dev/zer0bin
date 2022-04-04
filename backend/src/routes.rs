use actix_web::{
    get, post,
    web::{self},
    HttpResponse, Responder,
    http::header
};

use badge_maker::{BadgeBuilder, Style};

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

// Pastes

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
            // Only increment views if its not a single view paste
            if p.single_view {
                let _ = sqlx::query(r#"DELETE FROM pastes WHERE "id" = $1"#)
                    .bind(id.clone())
                    .execute(&state.pool)
                    .await;
            } else {
                let _ = sqlx::query(r#"UPDATE pastes SET "views" = "views" + 1 WHERE "id" = $1"#)
                    .bind(id.clone())
                    .execute(&state.pool)
                    .await;
            }

            if state.config.logging.on_get_paste {
                println!("[GET]  id={} views={} single_view={}", id, p.views + 1, p.single_view);
            }

            HttpResponse::Ok().json(ApiResponse {
                success: true,
                data: GetPasteResponse {
                    id: p.id,
                    content: p.content,
                    views: p.views + 1,
                    single_view: p.single_view,
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
            if p.single_view {
                let _ = sqlx::query(r#"DELETE FROM pastes WHERE "id" = $1"#)
                    .bind(id.clone())
                    .execute(&state.pool)
                    .await;
            } else {
                let _ = sqlx::query(r#"UPDATE pastes SET "views" = "views" + 1 WHERE "id" = $1"#)
                    .bind(id.clone())
                    .execute(&state.pool)
                    .await;
            }

            if state.config.logging.on_get_paste {
                println!("[GET] raw id={} views={} single_view={}", id, p.views + 1, p.single_view);
            }

            HttpResponse::Ok()
                .content_type("text/plain")
                .body(p.content)
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

#[get("/d/{id}")]
pub async fn download_paste(state: web::Data<AppState>, id: web::Path<String>) -> impl Responder {
    let id = id.into_inner();

    let res: Result<Paste, sqlx::Error> =
        sqlx::query_as::<_, Paste>(r#"SELECT * FROM pastes WHERE "id" = $1"#)
            .bind(id.clone())
            .fetch_one(&state.pool)
            .await;

    match res {
        Ok(p) => {
            if p.single_view {
                let _ = sqlx::query(r#"DELETE FROM pastes WHERE "id" = $1"#)
                    .bind(id.clone())
                    .execute(&state.pool)
                    .await;
            } else {
                let _ = sqlx::query(r#"UPDATE pastes SET "views" = "views" + 1 WHERE "id" = $1"#)
                    .bind(id.clone())
                    .execute(&state.pool)
                    .await;
            }

            if state.config.logging.on_get_paste {
                println!("[GET] download id={} views={} single_view={}", id, p.views + 1, p.single_view);
            }

            HttpResponse::Ok()
                .insert_header(header::ContentType::octet_stream())
                .insert_header(header::ContentDisposition {
                    disposition: header::DispositionType::Attachment,
                    parameters: vec![header::DispositionParam::Filename(format!("{}.txt", id))]
                })
                .body(p.content)
        }
        Err(e) => match e {
            sqlx::Error::RowNotFound => {
                return HttpResponse::NotFound().json(ApiResponse {
                    success: false,
                    data: ApiError {
                        message: format!("Paste {id} wasn't found."),
                    },
                });
            }
            _ => {
                eprintln!("Error occured while getting paste: {:?}", e);
                
                HttpResponse::InternalServerError().json(ApiResponse {
                    success: false,
                    data: ApiError {
                        message: "Unknown error occured, please try again.".to_string(),
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

    let content = data.content.clone();
    let single_view = data.single_view;

    let res =
        sqlx::query(r#"INSERT INTO pastes("id", "content", "single_view", "expires_at") VALUES ($1, $2, $3, $4)"#)
            .bind(id.clone())
            .bind(content.clone())
            .bind(single_view)
            .bind(expires_at)
            .execute(&state.pool)
            .await;

    match res {
        Ok(_) => {
            if state.config.logging.on_post_paste {
                println!("[POST] id={} length={} single_view={}", id, content.len(), single_view);
            }
            HttpResponse::Ok().json(ApiResponse {
                success: true,
                data: NewPasteResponse {
                    id,
                    content,
                    single_view,
                },
            })
        }
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

// Stats

#[get("/s")]
pub async fn get_stats(state: web::Data<AppState>) -> impl Responder {
    let version = env!("CARGO_PKG_VERSION").to_string();
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
            version,
        },
    })
}

// Badges

#[get("/v")]
pub async fn get_version_badge() -> impl Responder {
    let version = env!("CARGO_PKG_VERSION").to_string();

    let badge = BadgeBuilder::new()
        .label("version")
        .message(&version)
        .color_parse("#31748f")
        .label_color_parse("#191724")
        .style(Style::FlatSquare)
        .build()
        .expect("Failed to build badge")
        .svg();

    HttpResponse::Ok().content_type("image/svg+xml").body(badge)
}

#[get("/t")]
pub async fn get_total_pastes_badge(state: web::Data<AppState>) -> impl Responder {
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

    let badge = BadgeBuilder::new()
        .label("total pastes")
        .message(&count.unwrap().to_string())
        .color_parse("#ebbcba")
        .label_color_parse("#191724")
        .style(Style::FlatSquare)
        .build()
        .expect("Failed to build badge")
        .svg();

    HttpResponse::Ok().content_type("image/svg+xml").body(badge)
}
