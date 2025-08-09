from pydantic import BaseModel

class StoreCreate(BaseModel):
    name: str
    location: str

class StoreRead(BaseModel):
    id: int
    name: str
    location: str

    model_config = {
    "from_attributes": True
}  # Pydantic v2 replacement for orm_mode

