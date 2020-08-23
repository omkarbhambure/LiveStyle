from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(root_path="/api/")
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_headers=["*"], allow_methods=["*"],
)


@app.post("/style")
async def create_file(content_file: bytes = File(...), style_file: bytes = File(...)):
    print(type(content_file), type(style_file))
    return {"file_size": len(style_file)}
