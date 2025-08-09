from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.schemas.store import StoreCreate, StoreRead
from app.crud import crud_store
from app.database.database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=StoreRead)
def create_store(store: StoreCreate, db: Session = Depends(get_db)):
    return crud_store.create_store(db=db, store=store)

@router.get("/", response_model=List[StoreRead])
def read_stores(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud_store.get_stores(db, skip=skip, limit=limit)

