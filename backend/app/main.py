from fastapi import FastAPI, APIRouter
from routers.task import task_router
from database import Base, engine

app = FastAPI()

router = APIRouter()
router.include_router(
    task_router, 
    prefix="/tasks"
)
app.include_router(router)

Base.metadata.create_all(bind=engine)

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}