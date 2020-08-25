import React, { useState, useCallback } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import FileUpload from "../components/FileUpload";

const Front = () => {
  const [content_file, content_fileHandle] = useState([]);
  const [style_file, style_fileHandle] = useState([]);
  const [output, setOutput] = useState("");

  const handleContentFileChange = useCallback(
    (e) => content_fileHandle(e.target.files[0]),
    []
  );
  const handleStyleFileChange = useCallback(
    (e) => style_fileHandle(e.target.files[0]),
    []
  );

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onStart = async () => {
    let url = "/api/style";
    let formData = new FormData();

    formData.append("content_file", content_file);
    formData.append("style_file", style_file);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setOutput(data.stylized_image);
      });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} align="center">
          <Typography>Select Content</Typography>
          <FileUpload
            file={content_file}
            handleFileChange={handleContentFileChange}
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography>Select Style</Typography>
          <FileUpload
            file={style_file}
            handleFileChange={handleStyleFileChange}
          />
          <Button
            onClick={onStart}
            style={{ marginTop: "20px" }}
            variant="contained"
          >
            START MAGIC
          </Button>
        </Grid>
      </Grid>
      <Paper>
        {output === "" ? (
          <Typography>Click the button!</Typography>
        ) : (
          <img alt="output" src={"data:image/png;base64," + output} />
        )}
      </Paper>
    </div>
  );
};

export default Front;
