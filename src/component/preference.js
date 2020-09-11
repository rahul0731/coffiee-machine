import React, { Component } from 'react';
import UpArrow from '@material-ui/icons/ArrowDropUp';
import DownArrow from '@material-ui/icons/ArrowDropDown';
import smallSize from "./image/smallSize.png";
import mediumSize from "./image/mediumSize.png";
import largeSize from "./image/largeSize.png";
import SugarCubes2 from './image/ccubes3.png';
import SugarCubes1 from './image/cubes_1.png';
import SugarCubes3 from './image/cubes_3.png';
import DrinkList from './DrinkList';
export default class Preference extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSugerQnty: "2 spoons",
            selectedSizeOfCup: "100ml",
            selectedNoOfCup: 1,
            selectedDrink: this.props.selectedDrink,
            count: 1,
            enableSmCup: false,
            enableMdCup: true,
            enableLgCup: false,
            enableSug0: false,
            enableSug1: false,
            enableSug2: true,
            enableSug3: false,
            totalPrice:this.props.selectedDrinksPrice+20,
            currentSizePrice:20,
        };
        this.selectedDrinksPrice= this.props.selectedDrinksPrice;

    }

    incrementCount = () => {
        this.setState({});
        this.setState({
            totalPrice:(this.selectedDrinksPrice+this.state.currentSizePrice)*(this.state.count + 1),
            count: this.state.count + 1
        }, this.props.onNoOfCupChange(this.state.count + 1,(this.selectedDrinksPrice+this.state.currentSizePrice)*(this.state.count + 1))
        );
    };

    decrementCount = () => {
        if (this.state.count > 1) {
            this.setState({
                totalPrice:(this.selectedDrinksPrice+this.state.currentSizePrice)*(this.state.count - 1),
                count: this.state.count - 1
            }, this.props.onNoOfCupChange(this.state.count - 1,(this.selectedDrinksPrice+this.state.currentSizePrice)*(this.state.count - 1))
            );
        }
    };






    render() {
        return (
            <React.Fragment>
                <div
                    className="card"
                    style={{
                        padding: "10px",
                        maxWidth: "600px",
                        width: "100%",
                        background: "transparent",
                        margin: "auto"
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
                                display: "flex",
                                flexDirection: "column",
                                lineHeight: "1.5",
                                fontSize: "1.2rem",
                                margin: "0px 10px 0px 0px",
                            }}
                        >
                            {" "}
                            {this.state.selectedDrink}
                            <span style={{ fontSize: "11px", color: "#ffffffb0", textAlign: "left" }}>
                                {this.state.count} Cup{this.state.count > 1 ? "s" : ""}</span>
                        </p>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "1.3rem",
                            }}
                        >
                            <span style={{ paddingRight: "16px", fontSize: "24px" }}>
                                {this.state.count}
                            </span>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary" onClick={this.decrementCount} style={{
                                    background: "#353750", border: "none",
                                    borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px",
                                }}>
                                    <DownArrow style={{ color: "#ffffff85" }} fontSize="large" />
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={this.incrementCount} style={{
                                    marginLeft: "10px", background: "#353750", border: "none",
                                    borderBottomRightRadius: "25px", borderTopRightRadius: "25px"
                                }}>
                                    <UpArrow style={{ color: "#ffffff85" }} fontSize="large" />

                                </button>
                            </div>
                        </div>
                    </div>
                    <hr style={{ background: "#ffffff47" }} />
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
                                display: "flex",
                                flexDirection: "column",
                                lineHeight: "1.5",
                                fontSize: "1.2rem",
                                margin: "0px 10px 0px 0px",
                            }}
                        >
                            {" "}
              Size
                        <span style={{ fontSize: "11px", color: "#ffffffb0", textAlign: "left" }}>
                                {this.state.selectedSizeOfCup}</span>
                        </p>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "1.2rem",
                            }}
                        >

                            <img style={{ width: "30px", opacity: this.state.enableSmCup ? "1" : "0.4", cursor: "pointer" }}
                                onClick={() => {
                                    this.setState({
                                        enableSmCup: true,
                                        enableMdCup: false,
                                        enableLgCup: false,
                                        selectedSizeOfCup: "80ml",
                                        currentSizePrice:10,
                                        totalPrice:(this.selectedDrinksPrice+10)*(this.state.count)
                                    }, this.props.onCupSizeChange("80ml",(this.selectedDrinksPrice+10)*(this.state.count)))
                                }}
                                src={smallSize} ></img>
                            <span style={{ paddingLeft: "25px" }}></span>
                            <img style={{ width: "33px", opacity: this.state.enableMdCup ? "1" : "0.4", cursor: "pointer" }}
                                onClick={() => {
                                    this.setState({
                                        enableSmCup: false,
                                        enableMdCup: true,
                                        enableLgCup: false,
                                        selectedSizeOfCup: "100ml",
                                        currentSizePrice:20,
                                        totalPrice:(this.selectedDrinksPrice+20)*(this.state.count)
                                    }, this.props.onCupSizeChange("100ml",(this.selectedDrinksPrice+20)*(this.state.count)))
                                }}
                                src={mediumSize} ></img>
                            <span style={{ paddingLeft: "25px" }}></span>
                            <img style={{ width: "36px", opacity: this.state.enableLgCup ? "1" : "0.4", cursor: "pointer" }}
                                onClick={() => {
                                    this.setState({
                                        enableSmCup: false,
                                        enableMdCup: false,
                                        enableLgCup: true,
                                        selectedSizeOfCup: "120ml",
                                        currentSizePrice:30,
                                        totalPrice:(this.selectedDrinksPrice+30)*(this.state.count)
                                    }, this.props.onCupSizeChange("120ml",(this.selectedDrinksPrice+30)*(this.state.count)))
                                }}
                                src={largeSize} ></img>
                            <span style={{ paddingLeft: "12px" }}></span>


                        </div>
                    </div>
                    <hr style={{ background: "#ffffff47" }} />
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
                                display: "flex",
                                flexDirection: "column",
                                lineHeight: "1.5",
                                fontSize: "1.2rem",
                                margin: "0px 10px 0px 0px",
                            }}
                        >
                            {" "}
              Sugar
                        <span style={{ fontSize: "11px", color: "#ffffffb0", textAlign: "left" }}>{this.state.selectedSugerQnty}</span>
                        </p>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "1.2rem",
                            }}
                        >
                            <span style={{ paddingLeft: "5px" }}></span>
                            <div style={{ height: "100%", width: "45px", cursor: "pointer" }}
                                onClick={() => {
                                    this.setState({
                                        enableSug0: false,
                                        enableSug1: true,
                                        enableSug2: false,
                                        enableSug3: false,
                                        selectedSugerQnty: "1 Spoon"
                                    }, this.props.onSugerQntyChange("1 Spoon"));
                                }}
                            >
                                <img src={SugarCubes1} style={{ width: "12px", opacity: this.state.enableSug1 ? "1" : "0.4", }} />
                            </div>
                            <span style={{ paddingLeft: "5px" }}></span>
                            <div style={{ height: "100%", width: "50px", cursor: "pointer" }}
                                onClick={() => {
                                    this.setState({
                                        enableSug0: false,
                                        enableSug1: false,
                                        enableSug2: true,
                                        enableSug3: false,
                                        selectedSugerQnty: "2 Spoons"
                                    }, this.props.onSugerQntyChange("2 Spoons"));
                                }}
                            >
                                <img src={SugarCubes2} style={{ width: "25px", opacity: this.state.enableSug2 ? "1" : "0.4", }} />
                            </div>
                            <span style={{ paddingLeft: "5px" }}></span>
                            <div style={{ height: "100%", width: "60px", cursor: "pointer" }}
                                onClick={() => {
                                    this.setState({
                                        enableSug0: false,
                                        enableSug1: false,
                                        enableSug2: false,
                                        enableSug3: true,
                                        selectedSugerQnty: "3 Spoons"
                                    }, this.props.onSugerQntyChange("3 Spoons"));
                                }}
                            >
                                <img src={SugarCubes3} style={{ width: "30px", opacity: this.state.enableSug3 ? "1" : "0.4", }} />
                            </div>
                        </div>
                    </div>
                    <hr style={{ background: "#ffffff47" }} />
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
                                margin: "10px 10px 10px 0px",
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
                            {this.state.totalPrice} ₹
                        </div>
                    </div>
                    <hr style={{ background: "#ffffff47", marginBottom: "0px" }} />

                </div>

            </React.Fragment>
        );
    }
}