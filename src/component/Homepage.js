import React, { useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
// import ZoomInOutlinedIcon from "@material-ui/icons/ZoomInOutlined";
import Build from "@material-ui/icons/Build";
import smallSize from "./image/smallSize.png";
import mediumSize from "./image/mediumSize.png";
import largeSize from "./image/largeSize.png";
import Counter from "./Counter";
import { motion } from "framer-motion";
import DrinkList from "./DrinkList";
import ProductDetails from "./product-checkout";
import { Route, withRouter, useHistory } from "react-router-dom";
import Loader from "./loader";
import Dialog from "@material-ui/core/Dialog";
import Slide from '@material-ui/core/Slide';
import coffeeMP3 from "./image/Making-coffee.mp3";
import Preference from './preference'
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paytm: false,
      tabValue: this.props.payment ? 2 : 0,
      disableTabOne: this.props.payment ? true : false,
      disableTabTwo: this.props.payment ? true : true,
      disableTabThree: this.props.payment ? false : true,
      bdForSmCup: false,
      bdForMdCup: true,
      bdForLgCup: false,
      selectedDrink: "Cappuccino",
      selectedSizeOfCup: "100ml",
      selectedNoOfCup: 1,
      selectedSugerQnty: "2 spoons",
      timerValue: 20,
      openDialog: false,
      drinkPrice:0,
      totalPrice: 0,
      tempPrice:0,
    };
    this.drinksList = ["Cappuccino", "Macchiato", "Mocha", "Mocha Special"];
    this.intervalId = 0;
  }
  handleTabChange = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };

  resetToInitialState = () => {
    this.setState({
      selectedDrink: "Cappuccino",
      selectedSizeOfCup: "200ml",
      selectedNoOfCup: 1,
      bdForSmCup: false,
      bdForMdCup: true,
      bdForLgCup: false,
    });
  };

  handleTab1NextButton = (drink, price) => {
    // console.log("Drink:",drink,"Price:",price)
    if (drink) {
      this.setState({
        selectedDrink: drink,
        drinkPrice: price,
        tempPrice:price+20,
        totalPrice:price+20,
      })
    }
    this.setState({
      tabValue: 1,
      disableTabOne: true,
      disableTabTwo: false,
    });
  };

  handleTab2NextButton = () => {
    this.setState({
      tabValue: 2,
      disableTabThree: false,
      disableTabTwo: true,
    });
  };

  handleTab2BackButton = () => {
    this.resetToInitialState();
    this.setState({
      tabValue: 0,
      disableTabOne: false,
      disableTabTwo: true,
    });
  };

  handleTab3BackButton = () => {
    this.setState({
      totalPrice:this.state.tempPrice,
      selectedNoOfCup: 1,
      selectedSizeOfCup:"100ml",
      tabValue: 1,
      disableTabThree: true,
      disableTabTwo: false,
    });
  };

  

 

  

  componentDidMount() {
    if (this.props.payment) {
      this.playCoffeMakingSound();
      this.intervalId = setInterval(() => {
        if (this.state.timerValue > 1) {
          this.setState({ timerValue: this.state.timerValue - 1 })
        } else {
          clearInterval(this.intervalId);
          this.setState({ openDialog: true });
        }
      }, 1000)
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleClose = () => {
    if (this.state.openDialog) {
      this.setState({ openDialog: false })
    }
  }

  tone = new Audio(coffeeMP3);
  playCoffeMakingSound = () => {
    this.tone.loop = true;
    this.tone.play()
  }
  pauseCoffeeMakingSound = () => {
    this.tone.pause();
  }

  render() {
    // console.log("LOCATION PATHNAME", this.props.location.pathname);
    return (
      <React.Fragment>
        {this.state.timerValue <= 1 ? this.pauseCoffeeMakingSound() : null}
        {this.state.openDialog ?
          <SuccessDialog open={this.state.openDialog} handleClose={this.handleClose} /> : null
        }
        <div style={{ color: "white" }}>
          <div
            className="d-flex justify-content-center"
            style={{
              // background: "linear-gradient(90deg, rgba(35,37,62,1) 26%, rgba(54,55,75,1) 87%)",
              color: "white",
              padding: "25px 0px 15px 0px",
            }}
          >
            Machine is ready
          </div>
          <Tabs
            TabIndicatorProps={{ style: { background: "#06acf7cc" } }}
            value={this.state.tabValue}
            onChange={this.handleTabChange}
            centered
            style={{
              // background: "linear-gradient(90deg, rgba(35,37,62,1) 26%, rgba(54,55,75,1) 87%)",
              color: "white",
              borderBottom: "1px solid #424966",
            }}
          >
            <Tab
              disabled={this.state.disableTabOne}
              style={{
                maxWidth: "110px",
                fontSize: "13px",
                letterSpacing: "1px",
                color: this.state.tabValue === 0 ? "#06acf7cc" : "white",
              }}
              label="Drink"
              icon={<Images tab={0} activeTab={this.state.tabValue} />}
            />

            <Tab
              disabled={this.state.disableTabTwo}
              style={{
                maxWidth: "110px",
                fontSize: "13px",
                letterSpacing: "1px",
                color: this.state.tabValue === 1 ? "#06acf7cc" : "white",
              }}
              label="Preference"
              icon={<Images tab={1} activeTab={this.state.tabValue} />}
            />

            <Tab
              disabled={this.state.disableTabThree}
              style={{
                maxWidth: "110px",
                fontSize: "13px",
                letterSpacing: "1px",
                color: this.state.tabValue === 2 ? "#06acf7cc" : "white",
              }}
              label="Payment"
              icon={<Images tab={2} activeTab={this.state.tabValue} />}
            />
          </Tabs>
          <TabPanel value={this.state.tabValue} index={0}>
            <DrinkList onSlectedDrink={(selectedDrink,price) =>{
              this.handleTab1NextButton(selectedDrink, price)
              // console.log("Drink:",selectedDrink,"Price:",price)
            } }
              />

          </TabPanel>
          <TabPanel value={this.state.tabValue} index={1}>
            <Preference selectedDrink={this.state.selectedDrink} selectedDrinksPrice={this.state.drinkPrice}
              onCupSizeChange={(e,f) => {
                // console.log("The Cup size is", e,"price:",f);
                this.setState({ selectedSizeOfCup: e,totalPrice:f });
              }}
              onNoOfCupChange={(e,f) => {
                // console.log("The no  of cups are", e,f);
                this.setState({ selectedNoOfCup: e,totalPrice:f});
              }}
              onSugerQntyChange={(e) => {
                // console.log("The sug qnty is", e);
                this.setState({ selectedSugerQnty: e });
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "10%",
                width: "100%",
                right: "0px",
                left: "0px",
              }}
            >
              <div
                style={{
                  // marginTop: "100px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  className="btn"
                  style={{
                    width: "100px",
                    color: "#ffffffdb",
                    background: "#353750",
                    marginRight: "20px",
                  }}
                  onClick={() => this.handleTab2BackButton()}
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  className="btn"
                  style={{
                    width: "100px",
                    color: "#ffffffdb",
                    background: "linear-gradient(0deg, #09429c,#06acf7)",
                  }}
                  onClick={() => this.handleTab2NextButton()}
                >
                  Next
                </motion.button>
              </div>
            </div>

          </TabPanel>
         
          <TabPanel value={this.state.tabValue} index={2}>
            <div className="container">
              {this.props.payment ? (
                <div
                  className="size-count-wrapper"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      margin: "auto",
                      fontSize: "3rem",
                      background: "#3537508c",
                    }}
                  ></div>
                  <Loader />
                  <span>{this.state.timerValue >= 1 ? this.state.timerValue : null}</span>
                  <div
                    style={{
                      marginTop: "1.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        background: "#353750",
                        border: "none",
                        padding: "10px",
                      }}
                    >
                      BREWING
                    </div>
                    <div style={{ marginTop: "2rem", color: "wheat" }}>
                      Payment succeeded
                    </div>
                  </div>
                </div>
              ) : (
                  <ProductDetails
                  totalPrice={this.state.totalPrice}
                    selectedDrink={this.state.selectedDrink}
                    selectedSizeOfCup={this.state.selectedSizeOfCup}
                    selectedNoOfCup={this.state.selectedNoOfCup}
                    backButton={this.handleTab3BackButton}
                  />
                )}
            </div>
          </TabPanel>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Homepage);

function Images(props) {
  if (props.tab === 0) {
    return (
      <div
        className="tab-header-style"
        style={{
          background:
            props.activeTab === 0
              ? "linear-gradient(0deg, #09429c,#06acf7)"
              : "none",
          border: props.activeTab === 0 ? "none" : "2.4px solid #505877",
        }}
      >
        <LocalCafeOutlinedIcon className="icon-size" />
      </div>
    );
  } else if (props.tab === 1) {
    return (
      <div
        className="tab-header-style"
        style={{
          background:
            props.activeTab === 1
              ? "linear-gradient(0deg, #09429c,#06acf7)"
              : "none",
          border: props.activeTab === 1 ? "none" : "2.4px solid #505877",
        }}
      >
        <Build className="icon-size" />
      </div>
    );
  } else if (props.tab === 2) {
    return (
      <div
        className="tab-header-style"
        style={{
          background:
            props.activeTab === 2
              ? "linear-gradient(0deg, #09429c,#06acf7)"
              : "none",
          border: props.activeTab === 2 ? "none" : "2.4px solid #505877",
        }}
      >
        <PaymentOutlinedIcon className="icon-size" />
      </div>
    );
  }
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ maxWidth: "1100px", margin: "auto" }}
    >
      {value === index && (
        <Box style={{ minHeight: "100vh" }} p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SuccessDialog(props) {
  const handleClose = () => {
    props.handleClose();
  }
  const onOkClick = () => {
    history.push("/");
  }

  let history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 5000)
  }
  );



  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={props.open}
        onClose={handleClose}
      >
        <div style={{ display: "flex", justifyContent: "center", height: "100%", background: "#23253e", color: "#ffffffbd", padding: "20px" }}>
          <div style={{ margin: "35px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", }}>
            Thank you for using our service
              <button className="btn btn-primary mt-4" onClick={() => {
              onOkClick();
            }} >OK</button>
          </div>

        </div>
      </Dialog>
    </React.Fragment>
  );
}