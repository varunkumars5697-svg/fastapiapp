from sqlalchemy import Column,Integer,String,Enum,ForiegnKey
from models.company import CompanyBase
from sqlalchemy.orm import declarative_base

Base=declarative_base()

class Job(Base):
    _tablename_="jobs"
    id=Column(Integer,primary_key=True,index=True)
    title=Column(String,nullable=False)
    description=Column(String)
    salary=Column(Integer)
    company_id=Column(Integer,ForiegnKey("companies.id"))
