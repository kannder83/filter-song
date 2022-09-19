from fastapi import Response, status, HTTPException, Depends, APIRouter, Path
from sqlalchemy.orm import Session
from sqlalchemy import exc
from config.database import get_db


# Utils
from app.utils import RegisterSong


# Models and Schemas
from app import models, schemas


router = APIRouter(
    tags=["Songs"]
)


@router.get(
    path="/songs",
    status_code=status.HTTP_200_OK,
    summary="Show all songs",
    response_model=schemas.Register
)
def get_all_songs(
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    """
    Returns all songs.
    """

    try:
        count_all_songs = db.query(models.Song).count()
    except exc.SQLAlchemyError as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"something was wrong. Please try again later.")

    if count_all_songs == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not Found")

    all_songs = db.query(models.Song).offset(skip).limit(limit).all()

    if all_songs is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not Found")

    if len(all_songs) == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not Found")

    out_registers = RegisterSong(
        count_all_songs, limit, skip, all_songs)

    return out_registers.get_data()


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

    try:
        song_by_id = db.query(models.Song).filter(
            models.Song.id == song_id).first()
    except exc.SQLAlchemyError as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"something was wrong. Please try again later.")

    if song_by_id is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Song ID: {song_id} not found")

    return song_by_id


@router.get(
    path="/title/{song_name}",
    status_code=status.HTTP_200_OK,
    summary="Search a song by name or title",
    response_model=schemas.Register
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

    try:
        count_songs_by_name = db.query(models.Song).filter(
            models.Song.song.ilike(f'%{song_name}%')).count()
    except exc.SQLAlchemyError as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"something was wrong. Please try again later.")

    if count_songs_by_name == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not found")

    songs_by_name = db.query(models.Song).filter(
        models.Song.song.ilike(f'%{song_name}%')).offset(skip).limit(limit).all()

    if songs_by_name is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not found")

    if len(songs_by_name) == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"No Match by title")

    out_registers = RegisterSong(
        count_songs_by_name, limit, skip, songs_by_name)

    return out_registers.get_data()


@router.get(
    path="/artist/{artist_name}",
    status_code=status.HTTP_200_OK,
    summary="Search a song by artist name",
    response_model=schemas.Register
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

    try:
        count_songs_by_artist = db.query(models.Song).filter(
            models.Song.artist.ilike(f'%{artist_name}%')).count()
    except exc.SQLAlchemyError as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"something was wrong. Please try again later.")

    if count_songs_by_artist == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not found")

    songs_by_artist = db.query(models.Song).filter(
        models.Song.artist.ilike(f'%{artist_name}%')).offset(skip).limit(limit).all()

    if songs_by_artist is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not found")

    if len(songs_by_artist) == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"No Match by artist name")

    out_registers = RegisterSong(
        count_songs_by_artist, limit, skip, songs_by_artist)

    return out_registers.get_data()


@router.get(
    path="/genre/{musical_genre}",
    status_code=status.HTTP_200_OK,
    summary="Search a song by musical genre",
    response_model=schemas.Register
)
def get_song_by_name(
    musical_genre: str,
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    """
    Returns a list of songs by genre.
    """

    try:
        count_songs_by_name = db.query(models.Song).filter(
            models.Song.genre.ilike(f'%{musical_genre}%')).count()
    except exc.SQLAlchemyError as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"something was wrong. Please try again later.")

    if count_songs_by_name == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"No Match by genre")

    songs_by_genre = db.query(models.Song).filter(
        models.Song.genre.ilike(f'%{musical_genre}%')).offset(skip).limit(limit).all()

    if songs_by_genre is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Not found")

    if len(songs_by_genre) == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"No Match by genre")

    out_registers = RegisterSong(
        count_songs_by_name, limit, skip, songs_by_genre)

    return out_registers.get_data()
