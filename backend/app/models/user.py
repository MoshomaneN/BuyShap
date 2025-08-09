from sqlalchemy import Column, Integer, String, Float
from app.database.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=True)
    hashed_password = Column(String, nullable=False)
    budget = Column(Float, nullable=True)  # Optional monthly budget
    preferences = Column(String, nullable=True)  # JSON string or tags

