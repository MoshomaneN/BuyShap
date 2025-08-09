from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List, Dict
from app.database.database import SessionLocal
from app.models.product import Product
from app.schemas.product import ProductRead

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=Dict[str, List[ProductRead]])
def compare_items(items: List[str], db: Session = Depends(get_db)):
    result = {}
    for item in items:
        matches = (
            db.query(Product)
            .filter(Product.name.ilike(f"%{item}%"))
            .order_by(Product.price.asc())
            .limit(5)
            .all()
        )
        result[item] = matches
    return result
