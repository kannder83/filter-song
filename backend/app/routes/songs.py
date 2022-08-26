
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
    response_model=schemas.SongOut
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
    # response_model=schemas.SongOut
)
def get_song_by_name(
    song_name: str,
    db: Session = Depends(get_db)
):
    """
    Returns a list of songs by title or name.
    """

    song_by_name = db.query(models.Song).filter(
        models.Song.song.like(f'%{song_name}%'))

    # if song_by_id is None:
    #     raise HTTPException(
    #         status_code=status.HTTP_404_NOT_FOUND, detail=f"Song ID: {song_name} not found")

    return song_by_name
