from pydantic import BaseModel
from typing import Optional

class ProductCreate(BaseModel):
    name: str
    price: float
    store_id: int

class ProductRead(BaseModel):
    id: int
    name: str
    price: float
    store_id: int

    model_config = {
        "from_attributes": True
    }



