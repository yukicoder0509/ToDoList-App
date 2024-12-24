from sqlalchemy.orm import Session
from schemas.task import TaskCreate, TaskRead, TaskUpdate
from models.task import Task

def create_task(db: Session, task: TaskCreate):
    db_item = Task(content = task.content, status = False)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)

    return db_item

def read_tasks(db: Session):
    tasks =  db.query(Task).all()
    return [TaskRead(id = task.id, content = task.content, status = task.status) for task in tasks]

def read_task(db: Session, task_id: int):
    db_item = db.query(Task).filter(Task.id == task_id).first()
    return TaskRead(id = db_item.id, content = db_item.content, status = db_item.status)

def update_task(db: Session, task_id: int, task: TaskUpdate):
    db_item = db.query(Task).filter(Task.id == task_id).first()
    db_item.content = task.content
    db_item.status = task.status
    db.commit()
    db.refresh(db_item)

    return db_item

def delete_task(db: Session, task_id: int):
    db_item = db.query(Task).filter(Task.id == task_id).first()
    if db_item is None:
        return {"message": "Task not found"}
    
    db.delete(db_item)
    db.commit()

    return {"message": "Task deleted successfully"}