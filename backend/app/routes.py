
from fastapi import Response, status, HTTPException, Depends, APIRouter, Path
from sqlalchemy.orm import Session
from config.database import get_db


# Models and Schemas
from app import models, schemas


router = APIRouter(
    tags=["Songs"]
)


@router.get(
    path="/songs"
)
def get_songs():
    return {"songs": "all"}
