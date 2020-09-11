import React, { Component } from 'react';
import coffee1 from './image/coffee1.png';
import coffee2 from './image/coffee2.png';
import coffee3 from './image/coffee3.png'
import coffee4 from './image/coffee4.svg'
export default class DrinkList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    onDrinkClick = (selectedDrink,price) => {
        if (selectedDrink) {
            this.props.onSlectedDrink(selectedDrink,price);
        }
    }
    render() {
        return (<div className='container-fluid' >
            {/* <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> */}
            <div className="row">
                <div className="col-6 col-sm-4 p-4">
                    <div  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <img className="" 
                        onClick={()=>{this.onDrinkClick("Cappuccino",100)}}
                        src={coffee1} style={{
                            cursor:"pointer",
                            filter: "drop-shadow(0px 0px 30px #e0b061)",
                            width: "70px", height: "70px"
                        }} />
                        <div>Cappuccino</div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 p-4">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <img className="" 
                        onClick={()=>{this.onDrinkClick("Macchiato",80)}}
                        src={coffee2} style={{
                            cursor:"pointer",
                            filter: "drop-shadow(0px 0px 30px #bb7b4b)",
                            width: "70px", height: "70px"
                        }} />
                        <div>Macchiato</div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 p-4">
                    <div  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <img className=""
                        onClick={()=>{this.onDrinkClick("Expresso",70)}}
                         src={coffee3} style={{
                            cursor:"pointer",
                            filter: "drop-shadow(0px 0px 30px #fff)",
                            width: "70px", height: "70px"
                        }} />
                        <div>Expresso</div>
                    </div>
                </div>

                <div className="col-6 col-sm-4 p-4">
                    <div  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <img className="" 
                        onClick={()=>{this.onDrinkClick("Macchiato",80)}}
                        src={coffee2} style={{
                            cursor:"pointer",
                            filter: "drop-shadow(0px 0px 30px #bb7b4b)",
                            width: "70px", height: "70px"
                        }} />
                        <div>Macchiato</div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 p-4">
                    <div  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <img className="" 
                        onClick={()=>{this.onDrinkClick("Expresso",70)}}
                        src={coffee3} style={{
                            cursor:"pointer",
                            filter: "drop-shadow(0px 0px 30px #fff)",
                            width: "70px", height: "70px"
                        }} />
                        <div>Expresso</div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 p-4">
                    <div  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <img className="" 
                        onClick={()=>{this.onDrinkClick("Mocha",80)}}
                        src={coffee4} style={{
                            cursor:"pointer",
                            filter: "drop-shadow(0px 0px 30px #fff)",
                            width: "75px", height: "70px"
                        }} />
                        <div>Mocha</div>
                    </div>
                </div>

            </div>
            {/* </div> */}
        </div>
        );
    }
}