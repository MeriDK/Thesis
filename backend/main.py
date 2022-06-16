import shutil
from fastapi import FastAPI, UploadFile, File, status
from fastapi.params import Query
from fastapi.responses import FileResponse
from zipfile import ZipFile
import os
from typing import List, Union
from pydantic import BaseModel

app = FastAPI()

LEVELS = {
    0: "Easy.dat",
    1: "Easy.dat",
    2: "Normal.dat",
    3: "Normal.dat",
    4: "Hard.dat",
    5: "Hard.dat",
    6: "Expert.dat",
    7: "Expert.dat",
    8: "Expert plus.dat",
    9: "Expert plus.dat",
}

PARAMETERS = []


class Params(BaseModel):
    options: List[bool] = []


@app.post("/set")
async def set_params(params: Params):
    global PARAMETERS
    PARAMETERS = params.options
    return status.HTTP_200_OK


@app.post("/uplad")
async def upload(file: UploadFile = File()):
    global PARAMETERS
    if PARAMETERS:
        with open(f'{file.filename}', "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        zip_obj = ZipFile('result.zip', 'w')
        i = 0
        for option in PARAMETERS:
            if option:
                filename = LEVELS[i]
                f = open(filename, "w")
                zip_obj.write(filename)
                f.close()
                os.remove(filename)
            i = i+1
        os.remove(file.filename)
        PARAMETERS = []
        return FileResponse(zip_obj.filename, filename="result.zip")
    return {"data": "No parameters"}
