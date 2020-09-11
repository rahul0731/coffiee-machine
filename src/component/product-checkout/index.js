import React from "react";
import { PtmCrReq } from "../../api-routes";
import { Route, withRouter } from "react-router-dom";
import paytm_logo from "../image/paytm.png";
class ProductDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedDrink: this.props.selectedDrink,
      selectedSizeOfCup: this.props.selectedSizeOfCup,
      selectedNoOfCup: this.props.selectedNoOfCup,
      backButton: this.props.backButton,
      totalPrice: this.props.totalPrice,
      redirectToPaytm: false,
      _paytm: {},
    };
  }

  createPaytmReq = () => {
    fetch(PtmCrReq, {
      method: "POST",
      body: JSON.stringify({
        host: window.location.hostname,
      }),
    }).then(async (res) => {
      console.log("Reponse-status", res.status);
      let data = await res.json();
      if (res.status == 302) {
        this.setState({ _paytm: data, redirectToPaytm: true });
        console.log("Reponse-data", data);
      }
    });
  };

  render() {
    // console.log("this.context.router", this.context);
    let formElement = [];
    const {
      selectedDrink,
      selectedSizeOfCup,
      selectedNoOfCup,
      backButton,
      redirectToPaytm,
      _paytm,
    } = this.state;
    const { createPaytmReq } = this;
    let detailsUi = (
      <React.Fragment>
        <div
          className="card"
          style={{
            padding: "20px",
            maxWidth: "600px",
            width: "100%",
            background: "#3537508c",
          }}
        >
          <div
            style={{
              display: "flex",
              flexShrink: "0",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                lineHeight: "1.5",
                fontSize: "1.3rem",
                margin: "0px 10px 0px 0px",
              }}
            >
              {" "}
              Drink
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.3rem",
              }}
            >
              {selectedDrink}{" "}
            </div>
          </div>
          <hr style={{ background: "#ffffff70" }} />
          <div
            style={{
              display: "flex",
              flexShrink: "0",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                lineHeight: "1.5",
                fontSize: "1.3rem",
                margin: "0px 10px 0px 0px",
              }}
            >
              {" "}
              Size
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.3rem",
              }}
            >
              {" "}
              {selectedSizeOfCup}
            </div>
          </div>
          <hr style={{ background: "#ffffff70" }} />
          <div
            style={{
              display: "flex",
              flexShrink: "0",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                lineHeight: "1.5",
                fontSize: "1.3rem",
                margin: "0px 10px 0px 0px",
              }}
            >
              {" "}
              Cups
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.3rem",
              }}
            >
              {" "}
              {selectedNoOfCup}
            </div>
          </div>
          <hr style={{ background: "#ffffff70" }} />
          <div
            style={{
              display: "flex",
              flexShrink: "0",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                lineHeight: "1.5",
                fontSize: "1.5rem",
                margin: "0px 10px 0px 0px",
              }}
            >
              {" "}
              Total
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              {" "}
              {this.state.totalPrice} ₹
            </div>
          </div>
          <hr style={{ background: "#ffffff70" }} />
        </div>

        <PayButton
          actions={[createPaytmReq, backButton]}
          titles={["Paytm", "Back"]}
        />
      </React.Fragment>
    );
    if (redirectToPaytm) {
      for (let x in _paytm.param) {
        formElement.push(
          <input type="hidden" name={x} value={_paytm.param[x]} />
        );
      }
      formElement.push(
        <input type="hidden" name="CHECKSUMHASH" value={_paytm.checksum} />
      );

      detailsUi = (
        <React.Fragment>
          <form action={_paytm.txnUrl} name="paytmForm">
            {formElement}
          </form>

          <span
            style={{
              textAlign: "center",
              marginTop: "40%",
              paddingRight: "0.5rem",
            }}
          >
            Do not 'refresh' this page
          </span>
        </React.Fragment>
      );
    }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          flexDirection: " column",
        }}
      >
        {detailsUi}
      </div>
    );
  }
  componentDidUpdate() {
    // console.log("this.context.router",history);

    const { redirectToPaytm } = this.state;
    if (redirectToPaytm) {
      document.paytmForm.submit();
    }
  }
}
export default withRouter(ProductDetails);

function PayButton({ actions, titles }) {
  return [
    <button
      key="x"
      type="button"
      className="btn  btn-lg btn-block mt-4"
      style={{
        maxWidth: "600px",
        backgroundColor: "#ffffffe0",
        backgroundImage: `url(${paytm_logo})`,
        backgroundPosition: 'center',
        backgroundSize: '90px',
        backgroundRepeat: 'no-repeat',
        height: "50px",

      }}
      onClick={() => {
        actions[0]();
      }}
    >
      {/* {titles[0]} */}
    </button>,
    <button
      key="y"
      type="button"
      className="btn btn-secondary btn-lg btn-block"
      style={{ maxWidth: "600px", background: "#353750", border: "none" }}
      onClick={() => {
        actions[1]();
      }}
    >
      {titles[1]}
    </button>,
  ];
}
