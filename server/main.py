from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware
from PIL import Image
import io

app = FastAPI(root_path="/api/")
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_headers=["*"], allow_methods=["*"],
)


@app.post("/style")
async def create_file(content_file: bytes = File(...), style_file: bytes = File(...)):
    print(type(content_file), type(style_file))
    print(content_file[:10])
    content_image = Image.open(io.BytesIO(content_file))
    style_image = Image.open(io.BytesIO(style_file))
    print("Content: {}, Style: {}".format(content_image.size, style_image.size))
    return {"file_size": len(style_file)}
