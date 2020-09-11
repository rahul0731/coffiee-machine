import React, { Component } from 'react';
import coffee1 from './image/coffee1.png';
import coffee2 from './image/coffee2.png';
import coffee3 from './image/coffee3.png'
import Slider from "react-slick";
export class Carousel extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
   this.state = {
      activeSlide: 0,
      slidesToShow: 3,
      centerMode: true,
    };
   
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    let isLessThan600 = (window.innerWidth <= 600);
    if (isLessThan600 && this.state.centerMode) {
      // console.log("LEss than 760 TRUE")
      this.setState({ slidesToShow: 1, centerMode: false })
    } else if (!isLessThan600 && !this.state.centerMode) {
      // console.log("LEss than 760 FALSE")
      this.setState({ slidesToShow: 3, centerMode: true })
    }
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }


  render() {
  
      const settings = {
        dots:true,
        className: "center",
        centerMode: this.state.centerMode,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: this.state.slidesToShow,
        speed: 500,
        focusOnSelect:true,
        beforeChange: (current, next) => this.setState({ activeSlide: next },this.props.onchange(next)),
      };
    return (
      <div className='container-fluid' >
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div className="d-flex justify-content-center align-items-center mb-5 mt-5 flex-column " >
          <img className="" src={coffee1} style={{filter: "drop-shadow(0px 0px 30px #e0b061)",width:"150px",height:"150px"}} />
          <div style={{color:"#ffffffdb",fontSize:"14px",marginTop:"12px"}}>Cappuccino</div>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-5 mt-5 flex-column " >
          <img className="" src={coffee2} style={{filter: "drop-shadow(0px 0px 30px #bb7b4b)",width:"150px",height:"150px"}} />
          <div style={{color:"#ffffffdb",fontSize:"14px",marginTop:"12px"}}>Macciato</div>

          </div>
          <div className="d-flex justify-content-center align-items-center mb-5 mt-5 flex-column  ">
          <img className="" src={coffee3} style={{filter: "drop-shadow(0px 0px 30px #fff)",width:"150px",height:"150px"}} />
          <div style={{color:"#ffffffdb",fontSize:"14px",marginTop:"12px",marginLeft:"-25px"}}>Mocha</div>

          </div>
          <div className="d-flex justify-content-center align-items-center mb-5 mt-5 flex-column  ">
          <img className="" src={coffee3} style={{filter: "drop-shadow(0px 0px 30px #fff)",width:"150px",height:"150px"}} />
          <div style={{color:"#ffffffdb",fontSize:"14px",marginTop:"12px",marginLeft:"-25px"}}>Mocha Special</div>

          </div>
         
        </Slider>
        <div style={{ textAlign: "center" }}>
          {/* <button className="button" onClick={this.previous}>
            {this.state.activeSlide}
          </button> */}
          {/* <button className="button" onClick={this.next}>
            Next
          </button> */}
        </div>
        
      </div>
    )
  }
}

export default Carousel