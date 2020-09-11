import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  // {console.log("Inside Snackbar Alert.........")}
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export const CustomsSnackbar = (
  {
  flag,
  onClose,
  anchorOrigin,
  msg,
  severity,
}) => {
  return (
    <Snackbar
      anchorOrigin={
        anchorOrigin
          ? anchorOrigin
          : { vertical: "bottom", horizontal: "right" }
      }
      open={flag}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity ? severity : "success"}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

// severity="error"
// severity="warning"
// severity="info"
// severity="success"
