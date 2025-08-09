from fastapi import FastAPI
from app.api.v1.routes import auth, users, products, stores, compare, budget
from app.database.database import Base, engine
from app.services.budget_engine import suggest_items_within_budget
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Grocery Smart Backend")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend host
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(products.router, prefix="/products", tags=["Products"])
app.include_router(stores.router, prefix="/stores", tags=["Stores"])
app.include_router(compare.router, prefix="/compare", tags=["Comparison"])
app.include_router(budget.router, prefix="/budget", tags=["Budget Planner"])

