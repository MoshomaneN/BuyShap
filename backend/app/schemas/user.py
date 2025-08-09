from pydantic import BaseModel, EmailStr
from typing import Optional


class UserBase(BaseModel):
    email: EmailStr


class UserCreate(BaseModel):
    email: str
    password: str
    name: Optional[str] = None


class UserRead(UserBase):
    id: int

    model_config = {
    "from_attributes": True
}
