import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import ControlPointIcon from '@material-ui/icons/ArrowDropUp';
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';
import IndeterminateCheckBoxIcon from '@material-ui/icons/ArrowDropDown';
import { motion } from 'framer-motion'
import './style.css';
export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    }, this.props.onchange(this.state.count + 1));
  };

  decrementCount = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      }, this.props.onchange(this.state.count - 1));
    }
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div className="buttons">
          <div className="size-count-wrapper" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div className="d-flex justify-content-center align-items-center" style={{
              margin: "auto", width: "180px", height: "180px",
              color: "white", borderRadius: "50%", fontSize: "4rem",
              background: "#353750"
            }}>{count}</div>
            <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" style={{    background: "#353750",border: "none"}}>          
                  <IndeterminateCheckBoxIcon className="" style={{ color: "#ffffff85" }} onClick={this.decrementCount} fontSize="large" />
                </button>
                <button type="button" className="btn btn-secondary" style={{    background: "#353750",border: "none",borderLeft:"1px solid #ffffff4f"}}>
                <ControlPointIcon className="" style={{ color: "#ffffff85" }} onClick={this.incrementCount} fontSize="large" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
