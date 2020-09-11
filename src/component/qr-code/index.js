import React from "react";
import { withRouter } from "react-router-dom";
import QrCodeDialog from "../dialogs/qr-dialog";
import "./qr.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openQrCodeDialogs: false,
    };
  }

  closeQrCodeDialog = () => {
    console.log("[SetQr called]");
    this.setState(
      {
        openQrCodeDialogs: this.state.openQrCodeDialogs,
      },
      () => {
        console.log(
          "[SetQr called] this.state.openQrCodeDialogs",
          this.state.openQrCodeDialogs
        );
      }
    );
  };
  handleMenuClose = () => {};
  render() {
    return (
      <React.Fragment>
        <div
          className="qr-wrapper-main"
          style={{
            background: "rgb(35,37,62)",
            background:"linear-gradient(90deg, rgba(35,37,62,1) 26%, rgba(54,55,75,1) 87%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <div
            className="qr-wrapper"
            onClick={() => {
              //this.setState({ openQrCodeDialogs: true });
              this.props.history.push("/machine");
            }}
          >
            <QrCodeDialog
              open={this.state.openQrCodeDialogs}
              setClose={this.closeQrCodeDialog}
              onClose={this.closeQrCodeDialog}
            ></QrCodeDialog>
            <i className="material-icons">qr_code</i>
          </div>
          <div className="qr-text-wrapper">SCAN QR FROM DEVICE</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(LandingPage);
