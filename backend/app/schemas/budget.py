from pydantic import BaseModel
from typing import List

class BudgetRequest(BaseModel):
    budget: float
    product_ids: List[int]

class BudgetRecommendation(BaseModel):
    product_id: int
    store_id: int
    price: float

