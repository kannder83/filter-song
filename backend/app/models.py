from sqlalchemy import String, Integer, Column, Float
from config.database import Base


class Song(Base):
    __tablename__ = "Songs"

    id = Column(Integer, primary_key=True, nullable=False, index=True)
    artist = Column(String(255), nullable=False)
    song = Column(String(255), nullable=False)
    duration_ms = Column(Integer, nullable=False)
    explicit = Column(String(255), nullable=False)
    year = Column(Integer, nullable=False)
    popularity = Column(Integer, nullable=False)
    danceability = Column(Float, nullable=False)
    energy = Column(Float, nullable=False)
    key = Column(Integer, nullable=False)
    loudness = Column(Float, nullable=False)
    mode = Column(Integer, nullable=False)
    speechiness = Column(Float, nullable=False)
    acousticness = Column(Float, nullable=False)
    instrumentalness = Column(Float, nullable=False)
    liveness = Column(Float, nullable=False)
    valence = Column(Float, nullable=False)
    tempo = Column(Float, nullable=False)
    genre = Column(String(255), nullable=False)
