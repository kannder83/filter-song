from pydantic import BaseModel, EmailStr, Field
from datetime import datetime, date


class Song(BaseModel):
    id: int
    artist: str
    song: str
    duration_ms: int
    explicit: str
    year: int
    popularity: int
    danceability: float
    energy: float
    key: int
    loudness: float
    mode: int
    speechiness: float
    acousticness: float
    instrumentalness: float
    liveness: float
    valence: float
    tempo: float
    genre: str

    class Config:
        orm_mode = True


class SongOut(BaseModel):
    id: int
    artist: str
    song: str
    year: int
    duration_ms: int
    genre: str

    class Config:
        orm_mode = True
