from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(root_path="/api/")
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_headers=["*"], allow_methods=["*"],
)


@app.post("/style")
async def create_file(file: bytes = File(...)):
    return {"file_size": len(file)}
