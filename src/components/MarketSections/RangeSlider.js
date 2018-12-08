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
    let cost = Math.floor(((e.target.value/2)+80000)/25000)*25000
        cost = cost.toString().split("");
    if(cost.length < 4) {
      cost.unshift('$');
      cost=cost.join("");
    } else if (cost.length === 4) {
      cost.splice(1,0,",");
      cost.unshift('$');
      cost=cost.join("");
    } else {
      console.log(cost.length)
      let a = Math.floor((cost.length-1)/3);
      let i = cost.length-3;
      let j = 0;
      do {
      cost.splice(i,0,",");
      i-=3;
      j++;
      } while ( j<a );
      cost.unshift('$');
      cost=cost.join("");
    }
    
    document.getElementById("sliderStatus").innerHTML = cost

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
      <div className="savingsContainer"><h1 id="save">$9,375</h1><p>Redfin Seller Savings</p>
      <div id="sliderStatus"><h3>$625,000</h3>
      <span className="min-price-label">$200,000</span>
      <span className="max-price-label">$2,000,000</span>
      </div>
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
      </div>
    );
  }
}

export default RangeSlider;