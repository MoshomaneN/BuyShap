from fastapi import APIRouter
from app.services.budget_engine import suggest_items_within_budget

router = APIRouter()

@router.post("/budget")
def budget_route(payload: dict):
    prices = payload["product_prices"]
    budget = payload["budget"]
    return suggest_items_within_budget(prices, budget)

