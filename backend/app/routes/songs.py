
from fastapi import Response, status, HTTPException, Depends, APIRouter, Path
from sqlalchemy.orm import Session
from config.database import get_db


# Models and Schemas
from app import models, schemas


router = APIRouter(
    tags=["Songs"]
)


@router.get(
    path="/songs",
    status_code=status.HTTP_200_OK,
    summary="Show all songs",
    response_model=list[schemas.SongOut]
)
def get_all_songs(
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    """
    Returns all songs.
    """

    all_songs = db.query(models.Song).offset(skip).limit(limit).all()

    return all_songs


@router.get(
    path="/songs/{song_id}",
    status_code=status.HTTP_200_OK,
    summary="Show specific id song",
    response_model=schemas.Song
)
def get_song_by_id(
    song_id: int = Path(..., ge=1),
    db: Session = Depends(get_db)
):
    """
    Returns a specific data of ID.
    """

    song_by_id = db.query(models.Song).filter(
        models.Song.id == song_id).first()

    if song_by_id is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Song ID: {song_id} not found")

    return song_by_id


@router.get(
    path="/title/{song_name}",
    status_code=status.HTTP_200_OK,
    summary="Search a song by name or title",
    response_model=list[schemas.SongOut]
)
def get_song_by_name(
    song_name: str,
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    """
    Returns a list of songs by title or name.
    """

    song_by_name = db.query(models.Song).filter(
        models.Song.song.ilike(f'%{song_name}%')).offset(skip).limit(limit).all()

    if song_by_name is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not found")

    return song_by_name


@router.get(
    path="/artist/{artist_name}",
    status_code=status.HTTP_200_OK,
    summary="Search a song by artist name",
    response_model=list[schemas.SongOut]
)
def get_song_by_name(
    artist_name: str,
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    """
    Returns a list of songs by artist name.
    """

    song_by_artist = db.query(models.Song).filter(
        models.Song.artist.ilike(f'%{artist_name}%')).offset(skip).limit(limit).all()

    if song_by_artist is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not found")

    return song_by_artist


@router.get(
    path="/genre/{musical_genre}",
    status_code=status.HTTP_200_OK,
    summary="Search a song by musical genre",
    response_model=list[schemas.SongOut]
)
def get_song_by_name(
    musical_genre: str,
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    """
    Returns a list of songs by artist name.
    """

    song_by_genre = db.query(models.Song).filter(
        models.Song.genre.ilike(f'%{musical_genre}%')).offset(skip).limit(limit).all()

    if song_by_genre is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not found")

    return song_by_genre
