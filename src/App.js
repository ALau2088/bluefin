import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import WhyRedfin from "./components/WhyRedfin/WhyRedfin";
import Consult from "./components/Consult/Consult";
import MarketSections from "./components/MarketSections/MarketSections";
import CitiesSection from "./components/CitiesSection/CitiesSection";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (     
      <div className="App">
        <div className="background">  
          <NavBar />
          <SearchBar />
        </div>
        <WhyRedfin />
        <Consult />
        <MarketSections />
        <CitiesSection />
        <Footer/>
      </div>
    );
  }
}

export default App;
