from sqlalchemy.orm import Session
from schemas.task import TaskCreate
from models.task import Task

def create_task(db: Session, task: TaskCreate):
    db_item = Task(content = task.content, status = False)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)

    return db_item