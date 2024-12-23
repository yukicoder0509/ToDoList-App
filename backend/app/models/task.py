from sqlalchemy import Column, Integer, String, Boolean
from database import Base

class Task(Base):
    __tablename__ = 'tasks'
    id = Column(Integer, primary_key=True, index=True)
    content = Column(String(255), index=True)
    status = Column(Boolean, index=True) # 0 for incomplete, 1 for complete
