from pydantic import BaseModel, Field


class SongOut(BaseModel):
    id: int
    artist: str
    song: str
    year: int
    duration_ms: int
    genre: str

    class Config:
        orm_mode = True


class Song(SongOut):
    explicit: str
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
