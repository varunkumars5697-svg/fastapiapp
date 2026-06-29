from fastapi import APIRouter
from schemas.job import JobCreate,JobUpdate
from models import job
from sqlalchemy.orm import Session
from database import get_db,SessionLocal
from fastapi import HTTPException,status,Depends
from models import job as job_model

router = APIRouter(prefix="/job",tags=["job"])
jobs=[]

@router.post("/")
def create_job(job:JobCreate):
    jobs.append(job)
    return jobs

@router.get("/")
def get_all_job():
    return jobs

@router.get("/{job_id}")
def get_jobs(job_id: int):
    return jobs[job_id]

@router.put("/{job_id}")
def update_job(job_id:int,job:JobUpdate):
    jobs[job_id]=job
    return jobs

@router.delete("/{job_id}")
def delete_job(job_id:int):
    jobs.pop(job_id)
    return jobs