import React, { Component } from "react";
import './RangeSlider.css';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50
    };
  }
  sliderChange = (e) => {
    this.setState({
      value: e.target.value
    })
    document.getElementById("sliderStatus").innerHTML = e.target.value; 
    console.log(e.target.value)
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
        <div className="container">
          <div className="slider-arrow slider-arrow-left"></div>
          <input
            className="slider"
            type="range"
            min={0}
            max={100}
            value={value}
            step={10}
            onChange={this.sliderChange.bind(this)}           
          />
          <div className="slider-arrow slider-arrow-right"></div>
          
          <br />
          Slider Value=
          <span id="sliderStatus">50</span>
          </div>
      </div>
    );
  }
}

export default RangeSlider;