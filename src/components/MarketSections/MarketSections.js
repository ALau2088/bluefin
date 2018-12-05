import React, { Component } from "react";
import RangeSlider from "./RangeSlider";
import "./MarketSections.css";
// import Slider1 from './Slider1';
import a1 from "./Images1/a1.PNG";
import a2 from "./Images1/a2.PNG";
import a3 from "./Images1/a3.PNG";

class MarketSections extends Component {
  render() {
    return (
      <div className="MarketSections">
        <div className="Slider1">
          <figure>
            <div className="slideContainer">
              <div className="image">
                <img src={a1} alt="Images1" /></div>
              <div className="text">
                <p className="heading">Veena and Ryan</p>
                <p className="sub-heading">Saved $23,250 selling with a Redfin Agent in Los Angeles, CA</p>
                <p>____</p>
                <br/>
                <p className="body">"Our Redfin Agent really knocked it out of the ballpark, selling our house above the asking price. The commission savings was just an added bonus."</p>
              </div>
            </div>
            <div className="slideContainer">
              <img src={a2} alt="Images2" />
            </div>
            <div className="slideContainer">
              <img src={a3} alt="Images3" />
            </div>
          </figure>
        </div>
        <div className="paid">
        <h2>Paid to Put You First</h2>
        <p>Redfin surveys our customers, and posts the reviews online. We base our bonuses on these reviews. This makes us accountable for not just any sale, but the one that's right for you.</p>
        </div>
        <RangeSlider id="sliderStatus" />
        <div className="Slider2" />
      </div>
    );
  }
}

export default MarketSections;
