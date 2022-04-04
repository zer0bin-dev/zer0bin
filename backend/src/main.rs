mod config;
mod models;
mod routes;

use std::{io, path::Path, path::PathBuf};

use actix_cors::Cors;
use actix_governor::{Governor, GovernorConfigBuilder};
use actix_web::{
    web::{self, Data},
    App, HttpServer,
};
use config::Config;

use sqlx::{migrate::Migrator, postgres::PgPoolOptions, PgPool};

use crate::routes::{
    get_paste, get_raw_paste, get_stats, get_total_pastes_badge, get_version_badge, new_paste,
};

#[derive(Clone)]
pub struct AppState {
    pub config: Config,
    pub pool: PgPool,
}

pub async fn migrations(pool: &PgPool) -> Result<(), sqlx::Error> {
    Migrator::new(Path::new("./migrations"))
        .await?
        .run(pool)
        .await?;

    Ok(())
}

#[actix_rt::main]
async fn main() -> io::Result<()> {
    let config = config::load(PathBuf::from("config.json"));

    let db_uri = &config.databases.postgres_uri.to_string();

    let pool = PgPoolOptions::new()
        .max_connections(100)
        .connect(db_uri)
        .await
        .expect("Failed to connect to database");

    migrations(&pool).await.expect("Failed to run migrations");

    let address = format!(
        "{}:{}",
        config.server.backend_host, config.server.backend_port
    );

    let paste_governor = GovernorConfigBuilder::default()
        .per_second(config.ratelimits.seconds_in_between_pastes)
        .burst_size(config.ratelimits.allowed_pastes_before_ratelimit)
        .finish()
        .unwrap();

    let state = AppState { config, pool };
    // migrate(db_uri, &include_dir!("migrations"))
    //     .await
    //     .expect("Error in migrations!");
    
    println!("🚀 zer0bin is running on {address}");

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
            .service(get_stats)
            .service(
                web::scope("/p")
                    .wrap(Governor::new(&paste_governor))
                    .service(get_paste)
                    .service(new_paste)
                    .service(get_raw_paste),
            )
            .service(
                web::scope("/b")
                    .service(get_version_badge)
                    .service(get_total_pastes_badge),
            )
    })
    .bind(address)?
    .run()
    .await
}
