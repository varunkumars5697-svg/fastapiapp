from sqlalchemy import Column,Integer,String,Enum
from sqlalchemy.orm import declarative_base

Base=declarative_base()
class CompanyBase(Base):
    _tablename_="companies"
    id=Column(Integer,primary_key=true,index=True)
    name=Column(String,index=True)
    email=Column(String,index=True)
    phone=Column(String,index=True)
    