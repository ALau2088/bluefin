import React, { Component } from "react";
import './RangeSlider.css';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1090000
    };
    this.arrowLeft = React.createRef();
    this.arrowRight = React.createRef();
  }
  sliderChange = (e) => {
    this.setState({
      value: e.target.value
    })
    // console.log(e.target.value)
    document.getElementById("sliderStatus").innerHTML = e.target.value;
    document.getElementById("save").innerHTML = e.target.value*0.015; 
    // console.log(this.arrowLeft.current.id);
    document.getElementById(this.arrowLeft.current.id).style.display = "none";
    document.getElementById(this.arrowRight.current.id).style.display = "none"
  }
  /*
  sliderChange(val){
    document.getElementById("sliderStatus").innerHTML = val;   
  };
  */

  render(){
    const {value} = this.state
    return (
      <div className="Savings">
      <h1 id="save">$9,375</h1>
      <div id="sliderStatus"><h3>625000</h3><p>Redfin Seller Savings</p></div>
      <span className="min-price-label">$200,000</span>
      <span className="max-price-label">$2,000,000</span>
        <div className="container">
            <div id="arrow-left" className="slider-arrow slider-arrow-left" ref= { this.arrowLeft }></div>
            <input
              className="slider"
              type="range"
              min={200000}
              max={2000000}
              value={value}
              step={10}
              onChange={this.sliderChange.bind(this)}           
            />
            <div id="arrow-right" className="slider-arrow slider-arrow-right" ref= { this.arrowRight }></div>
        </div>
      </div>
    );
  }
}

export default RangeSlider;