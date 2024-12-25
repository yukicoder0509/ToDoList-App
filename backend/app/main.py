from fastapi import FastAPI, APIRouter
from routers.task import task_router
from database import Base, engine
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

router = APIRouter()
router.include_router(
    task_router, 
    prefix="/tasks"
)
app.include_router(router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}