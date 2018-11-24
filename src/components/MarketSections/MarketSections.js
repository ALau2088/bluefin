import React, { Component } from "react";
import Slider from "./Slider";
import "./MarketSections.css";
import a1 from "./Images1/a1.PNG";
import a2 from "./Images1/a2.PNG";
import a3 from "./Images1/a3.PNG";

class MarketSections extends Component {
  render() {
    return (
      <div className="MarketSections">
        <div className="Slider1">
          <figure>
            <div><img src={a1} alt="Images1"/></div>
            <div><img src={a2} alt="Images2"/></div>
            <div><img src={a3} alt="Images3"/></div>
          </figure>
        </div>
        <Slider id="sliderStatus"/>
        <div className="Slider2" />
      </div>
    );
  }
}

export default MarketSections;
