use std::{fs::File, path::PathBuf};

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct Config {
    pub server: ServerConfig,
    pub pastes: PastesConfig,
    pub databases: DatabasesConfig,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct ServerConfig {
    pub backend_port: u16,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct PastesConfig {
    pub character_limit: usize,
    pub days_til_expiration: i64,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct DatabasesConfig {
    pub postgres_uri: String,
}

pub fn load(path: PathBuf) -> Config {
    let file = File::open(path).expect("Failed to load config");
    let config = serde_json::from_reader(file).unwrap();

    config
}
