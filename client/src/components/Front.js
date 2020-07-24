import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import fire from "../media/fire.jpg";
import water from "../media/water.jpg";
import camera from "../media/camera.jpg";
import painting1 from "../media/1.webp";
import painting2 from "../media/2.webp";
import painting3 from "../media/3.webp";
import painting4 from "../media/4.webp";
import painting5 from "../media/5.webp";
import painting6 from "../media/6.webp";
import person from "../media/person.jpg";

const Front = () => {
  const [selectedArt, setSelectedArt] = useState("None");

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "30vh" }}>
            <Button onClick={() => setSelectedArt("Painting 1")}>
              <img src={painting1} style={{ width: "100%" }} />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "30vh" }}>
            <Button onClick={() => setSelectedArt("Painting 2")}>
              <img src={painting2} style={{ width: "100%" }} />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "30vh" }}>
            <Button onClick={() => setSelectedArt("Painting 3")}>
              <img src={painting3} style={{ width: "100%" }} />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "30vh" }}>
            <Button onClick={() => setSelectedArt("Painting 4")}>
              <img src={painting4} style={{ width: "100%" }} />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "30vh" }}>
            <Button onClick={() => setSelectedArt("Painting 5")}>
              <img src={painting5} style={{ width: "100%" }} />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "30vh" }}>
            <Button onClick={() => setSelectedArt("Painting 6")}>
              <img src={painting6} style={{ width: "100%", height: "100%" }} />
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} align="center">
          <Typography>Selected Art: {selectedArt}</Typography>
          <Button
            onClick={() => window.open("https://github.com/amogh-w", "_blank")}
            style={{ marginTop: "20px" }}
            variant="contained"
          >
            START
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper style={{ padding: "10px" }}>
            <img
              src={person}
              style={{ display: "block", margin: "0px auto" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Front;
