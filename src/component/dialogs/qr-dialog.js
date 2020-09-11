import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import QrReader from "react-qr-reader";
//import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
//import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import QueryString from "query-string";
import { CustomsSnackbar } from "../snakbar/snackbar";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function QrCodeDialog(props) {
  const { open, setClose, currentDevice, onClose } = props;
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackSeverity, setSnackSeverity] = React.useState("");
  const [snackMsg, setSnackMsg] = React.useState("");
  const [customeSnackbarAnchor, setCustomeSnackbarAnchor] = useState({
    vertical: "top",
    horizontal: "center",
  });
  const [result, setResult] = useState("No result");
  const handleClose = () => {
    setClose();
  };

  const handleScan = async (data) => {
    //data.preventDefault();
    history.push("/machine");
  };
  const handleError = (err) => {
    console.error(err);
  };
  const handleSnackbar = () => {
    setOpenSnack(false);
  };
  return (
    <React.Fragment>
      <CustomsSnackbar
        msg={snackMsg}
        flag={openSnack}
        onClose={handleSnackbar}
        key={"cusSnackbar"}
        anchorOrigin={customeSnackbarAnchor}
        severity={snackSeverity}
      />
      <Dialog
        fullWidth
        maxWidth="xs"
        // width={100}
        style={{ maxWidth: "400px", margin: "auto" }}
        PaperComponent={PaperComponent}
        open={open}
        onClose={() => {
          onClose();
        }}
        aria-labelledby="draggable-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="draggable-dialog-title"
          style={{
            background: "rgb(35,37,62)",
            background:
              "linear-gradient(90deg, rgba(35,37,62,1) 26%, rgba(54,55,75,1) 87%)",
            color: "white",
            fontSize: "1rem",
          }}
        >
          Device QR
          <IconButton
            style={{ color: "white", float: "right" }}
            aria-label="upload picture"
            component="button"
            onClick={() => {
              onClose();
            }}
          ></IconButton>
        </DialogTitle>
        <div
          style={{
            position: "absolute",
            width: "50px",
            right: "0px",
            top: "18px",
            color: "white",
          }}
          onClick={() => {
            onClose();
          }}
        >
          <CloseIcon style={{ cursor: "pointer" }} />
        </div>
        <DialogContent
          style={{
            background:
              "linear-gradient(90deg, rgba(35,37,62,1) 26%, rgba(54,55,75,1) 87%)",
          }}
        >
          <QrReader delay={300} onError={handleError} onScan={handleScan} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
