import React, { useState, useCallback } from "react";
import { Grid, Paper, Typography, Button, Card, CardMedia } from "@material-ui/core";
import FileUpload from "../components/FileUpload";
// import gal from "../media/gal.jpg";
// Container, GridList, GridListTile
const Front = () => {
  const [content_file, content_fileHandle] = useState([]);
  const [style_file, style_fileHandle] = useState([]);
  const [output, setOutput] = useState("");
  const [contentout, setContentout] = useState("");
  const [styleout, setStyleout] = useState("");

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
    toBase64(content_file).then(result => {
      setContentout(result);
    });
    toBase64(style_file).then(result => {
      setStyleout(result);
    });
  };

  const onReset = () => {
    window.location.reload(true);
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
        <Grid item xs={12} align="center" style={{ paddingBottom: "50px" }}>
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
          <Typography style={{ textAlign: 'center' }}>Click the button!</Typography>
        ) : (
            <Grid container spacing={4} direction="row" style={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardMedia component="img" src={contentout} />
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardMedia component="img" src={styleout} />
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardMedia component="img" src={"data:image/png;base64," + output} />
                </Card>
              </Grid>
            </Grid>
          )}
      </Paper>
      <Grid container spacing={2} >
        <Grid item xs={12} align="center" style={{ paddingTop: "50px" }}>
          <Button
            onClick={onReset}
            style={{ marginTop: "20px" }}
            variant="contained"
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Front;
