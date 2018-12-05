// Stateless component to structure info how to be displayed and style

import React from "react";
//import Images1 from "./Images1";

export default function Slider1 () {
  
    return(
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
    )
}
