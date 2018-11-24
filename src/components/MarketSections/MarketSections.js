import React, { Component } from "react";
import Slider from "./Slider";
import "./MarketSections.css";
import _1 from "./Images1/_1.PNG";
import _2 from "./Images1/_2.PNG";
import _3 from "./Images1/_3.PNG";

class MarketSections extends Component {
  render() {
    return (
      <div className="MarketSections">
        <div className="Slider1">
          <figure>
            <div><img src={_1} alt="Images1"/></div>
            <div><img src={_2} alt="Images2"/></div>
            <div><img src={_3} alt="Images3"/></div>
          </figure>
        </div>
        <Slider id="sliderStatus"/>
        <div className="Slider2" />
      </div>
    );
  }
}

export default MarketSections;
