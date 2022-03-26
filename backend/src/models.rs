use chrono::NaiveDateTime;
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(FromRow)]
pub struct Paste {
    pub id: String,
    pub content: String,
    pub views: i64,
    pub single_view: bool, 
    pub expires_at: Option<NaiveDateTime>,
}

#[derive(Deserialize)]
pub struct PartialPaste {
    pub content: String,
    pub single_view: bool
}

#[derive(Serialize)]
pub struct ApiResponse<T> {
    pub success: bool,
    pub data: T,
}

#[derive(Serialize)]
pub struct NewPasteResponse {
    pub id: String,
    pub content: String,
    pub single_view: bool,
}

#[derive(Serialize)]
pub struct GetPasteResponse {
    pub id: String,
    pub content: String,
    pub views: i64,
    pub single_view: bool, 
    pub expires_at: Option<NaiveDateTime>,
}

#[derive(Serialize)]
pub struct GetStatsResponse {
    pub count: i64,
    pub version: String,
}

#[derive(Serialize)]
pub struct ApiError {
    pub message: String,
}
