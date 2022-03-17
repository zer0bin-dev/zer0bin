use std::{fs::File, path::PathBuf};

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct Config {
    pub server: ServerConfig,
    pub pastes: PastesConfig,
    pub ratelimits: RatelimitsConifg,
    pub databases: DatabasesConfig,
    pub logging: LoggingConfig
}

#[derive(Serialize, Deserialize, Clone)]
pub struct ServerConfig {
    pub backend_host: String,
    pub backend_port: u16,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct RatelimitsConifg {
    pub seconds_in_between_pastes: u64,
    pub allowed_pastes_before_ratelimit: u32,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct PastesConfig {
    pub character_limit: usize,
    pub days_til_expiration: i64,
    pub id_length: usize,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct DatabasesConfig {
    pub postgres_uri: String,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct LoggingConfig {
    pub on_post_paste: bool,
    pub on_get_paste: bool
}

pub fn load(path: PathBuf) -> Config {
    let file = File::open(path).expect("Failed to load config");
    serde_json::from_reader(file).unwrap()
}
