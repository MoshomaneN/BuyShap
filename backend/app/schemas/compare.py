from pydantic import BaseModel
from typing import List

class CompareRequest(BaseModel):
    product_ids: List[int]

class ComparisonResult(BaseModel):
    product_id: int
    store_id: int
    price: float

