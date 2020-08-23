import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

const FileUpload = (props) => {
  const useStyles = makeStyles((theme) => ({
    uploadBtnWrapper: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
    },
    btn: {
      marginTop: "10px",
      marginBottom: "10px",
      border: "2px solid gray",
      color: "gray",
      backgroundColor: "white",
      padding: " 4px 10px",
      borderRadius: "8px",
      fontSize: "20px",
      fontWeight: "bold",
      width: "100%",
    },
    file: {
      fontSize: "100px",
      position: "absolute",
      left: 0,
      top: 0,
      opacity: 0,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.uploadBtnWrapper}>
      <Button className={classes.btn}>
        {props.file.lastModified ? "Change selected file" : "Choose File"}
      </Button>
      <input
        type="file"
        name="myfile"
        onChange={props.handleFileChange}
        className={classes.file}
      />
    </div>
  );
};

export default FileUpload;
