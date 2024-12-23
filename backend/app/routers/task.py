from fastapi import APIRouter, Depends
from controllers.task import create_task
from schemas.task import TaskCreate
from database import get_db
from sqlalchemy.orm import Session

task_router = APIRouter()

@task_router.get("/")
def read_root():
    return {"Hello": "World"}

@task_router.post("/")
def create(new_task: TaskCreate, db: Session = Depends(get_db)):
    return create_task(db=db, task=new_task)