mod config;
mod models;

use std::{io, path::PathBuf};

use actix_cors::Cors;
use actix_web::{
    get, post,
    web::{self, Data},
    App, HttpResponse, HttpServer, Responder,
};
use config::Config;

use chrono::{Duration, NaiveDateTime};
use models::{ApiError, ApiResponse, GetPasteResponse, NewPasteResponse, PartialPaste, Paste};
use nanoid::nanoid;
use sqlx::{postgres::PgPoolOptions, types::chrono::Utc, PgPool};

#[derive(Clone)]
struct AppState {
    config: Config,
    pool: PgPool,
}

#[get("/{id}")]
async fn get_paste(state: web::Data<AppState>, id: web::Path<String>) -> impl Responder {
    let id = id.into_inner();

    let res: Result<Paste, sqlx::Error> =
        sqlx::query_as::<_, Paste>(r#"SELECT * FROM pastes WHERE "id" = $1"#)
            .bind(id.clone())
            .fetch_one(&state.pool)
            .await;

    match res {
        Ok(p) => {
            if let Err(_) =
                sqlx::query(r#"UPDATE pastes SET "views" = "views" + 1 WHERE "id" = $1"#)
                    .bind(id.clone())
                    .execute(&state.pool)
                    .await
            {
                // we should probably handle this but eh
            };

            return HttpResponse::Ok().json(ApiResponse {
                success: true,
                data: GetPasteResponse {
                    id: p.id,
                    content: p.content,
                    views: p.views + 1,
                    expires_at: p.expires_at,
                },
            });
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
                return HttpResponse::InternalServerError().json(ApiResponse {
                    success: false,
                    data: ApiError {
                        message: "Unknown error occurred, please try again.".to_string(),
                    },
                });
            }
        },
    }
}

#[post("/n")]
async fn new_paste(state: web::Data<AppState>, data: web::Json<PartialPaste>) -> impl Responder {
    if data.content.is_empty() || data.content.len() > state.config.pastes.character_limit {
        let character_limit = state.config.pastes.character_limit;

        return HttpResponse::BadRequest().json(ApiResponse {
            success: false,
            data: ApiError {
                message: format!("Maximum file length exceeded, maximum is {character_limit} characters. Or the content is blank.."),
            },
        });
    }

    let id = nanoid!(10);

    let expires_at;

    if state.config.pastes.days_til_expiration == -1 {
        expires_at = None;
    } else {
        expires_at = Some(Utc::now() + Duration::days(state.config.pastes.days_til_expiration));
    }

    let res =
        sqlx::query(r#"INSERT INTO pastes("id", "content", "expires_at") VALUES ($1, $2, $3)"#)
            .bind(id.clone())
            .bind(data.content.clone())
            .bind(expires_at)
            .execute(&state.pool)
            .await;

    match res {
        Ok(_) => {
            return HttpResponse::Ok().json(ApiResponse {
                success: true,
                data: NewPasteResponse {
                    id,
                    content: data.content.clone(),
                },
            });
        }
        Err(e) => {
            println!("{}", e);
            return HttpResponse::InternalServerError().json(ApiResponse {
                success: false,
                data: ApiError {
                    message: "Unknown error occurred, please try again.".to_string(),
                },
            });
        }
    }
}

#[actix_rt::main]
async fn main() -> io::Result<()> {
    let config = config::load(PathBuf::from("../config.json"));
    let pool = PgPoolOptions::new()
        .max_connections(100)
        .connect(&config.databases.postgres_uri)
        .await
        .expect("Failed to connect to database");

    let address = format!(
        "{}:{}",
        config.server.backend_host, config.server.backend_port
    );

    let state = AppState { config, pool };

    println!("🚀 zer0bin is running on {}", address);

    HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_header()
            .allow_any_method()
            .allow_any_origin()
            .send_wildcard()
            .max_age(3600);

        App::new()
            .wrap(cors)
            .app_data(Data::new(state.clone()))
            .service(web::scope("/p").service(get_paste).service(new_paste))
    })
    .bind(address)?
    .run()
    .await
}
