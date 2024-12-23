from pydantic import BaseModel

class TaskBase(BaseModel):
    content: str

class TaskCreate(TaskBase):
    pass

class TaskRead(TaskBase):
    status: bool # 0 for incomplete, 1 for complete

class TaskUpdate(TaskBase):
    status: bool # 0 for incomplete, 1 for complete