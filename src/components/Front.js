import React from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import fire from "../media/fire.jpg";
import water from "../media/water.jpg";
import camera from "../media/camera.jpg";

const Front = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "20vh" }}>
            <img src={water} style={{ width: "100%", height: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "20vh" }}>
            <img src={fire} style={{ width: "100%", height: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "20vh" }}>
            <img src={water} style={{ width: "100%", height: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "20vh" }}>
            <img src={fire} style={{ width: "100%", height: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "20vh" }}>
            <img src={water} style={{ width: "100%", height: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper style={{ padding: "10px", height: "20vh" }}>
            <img src={fire} style={{ width: "100%", height: "100%" }} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} align="center">
          <Button
            onClick={() => window.open("https://github.com/amogh-w", "_blank")}
          >
            <a
              style={{
                textDecoration: "none",
              }}
              href="#"
            >
              <Typography variant="subtitle2">START</Typography>
            </a>
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper style={{ padding: "10px", height: "40vh" }}>
            <img src={camera} style={{ width: "100%", height: "100%" }} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Front;
