from fastapi import APIRouter, Depends
from controllers.task import create_task, read_tasks,read_task, update_task, delete_task
from schemas.task import TaskCreate, TaskRead, TaskUpdate
from database import get_db
from sqlalchemy.orm import Session

task_router = APIRouter()

@task_router.get("/", response_model=list[TaskRead])
def read_tasks_list(db: Session = Depends(get_db)):
    return read_tasks(db=db)

@task_router.get("/{task_id}", response_model=TaskRead)
def read_single_task(task_id: int, db: Session = Depends(get_db)):
    return read_task(db=db, task_id=task_id)

@task_router.post("/")
def create(new_task: TaskCreate, db: Session = Depends(get_db)):
    return create_task(db=db, task=new_task)

@task_router.put("/{task_id}")
def update(task_id: int, updated_task: TaskUpdate, db: Session = Depends(get_db)):
    return update_task(db=db, task_id=task_id, task=updated_task)

@task_router.delete("/{task_id}")
def delete(task_id: int, db: Session = Depends(get_db)):
    return delete_task(db=db, task_id=task_id)