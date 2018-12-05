import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.openSlideMenu = this.openSlideMenu.bind(this);
    this.closeSlideMenu = this.closeSlideMenu.bind(this);

    this.sideNav = React.createRef();
  } 

  openSlideMenu() {
    
    console.log("test");
    console.log(this.sideNav.current.id);
    document.getElementById(this.sideNav.current.id).style.width = "250px";
  }

  closeSlideMenu() {
    // console.log("test");
    // console.log(this.sideNav.current.id);
    document.getElementById(this.sideNav.current.id).style.width = "0px";
  }
  
  render() {
    const divStyle = window.outerHeight;
    console.log(divStyle)
    return (
      <div className="NavBar">
        <nav className="main-nav">
          <div className="header-left">
            <ul>
              <li>
              <span className="open-slide">
                <p className="burgerMenu" onClick={this.openSlideMenu}>
                  <svg width="30" height="30">
                    <path d="M0,5 30,5" stroke="#fff" strokeWidth="5"/>
                    <path d="M0,14 30,14" stroke="#fff" strokeWidth="5"/>
                    <path d="M0,23 30,23" stroke="#fff" strokeWidth="5"/>
                  </svg>
                </p>
              </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="30"
                  viewBox="0 0 110 30"
                >
                  <path
                    d="M56.8 5.7c-2-1.3-4.8-1.8-8.4-1.8h-6.9v22.9h7.1c2.5 0 4.7-.3 6.5-1s3.2-1.9 4.2-3.6 1.5-3.9 1.5-6.7c0-2.4-.3-4.4-.9-6-.9-1.7-1.8-3-3.1-3.8zm-1.9 13.6c-.3 1.1-.9 2-1.7 2.6-.9.7-2.3 1-4.1 1h-2.5V7.5h2.1c2 0 3.6.3 4.6 1.1.7.6 1.3 1.3 1.6 2.4s.5 2.4.5 4c0 1.8-.1 3.2-.5 4.3zm9 7.4h5.2V17h6.1v-3.8h-6.1V7.6h9.3V3.8H63.9v22.9zm17.9 0H87V3.8h-5.2v22.9zM110 3.8h-5.3V17L95 3.8h-4.2v22.9h5.3V13.2l9.6 13.5h4.3V3.8zM21.7 27.6c-.4-.2-.9-.5-2.1-2.5l-2.4-3.9-2.8-4.6-.2-.4c.1 0 .3-.1.4-.1 3.2-1.1 5.1-4 5.1-8.2 0-2.1-.8-4-2.4-5.4-.2-.2-.5-.4-.7-.6C14.4.5 11.5 0 7.7 0H.4C0 0-.1.3.1.5s.4.5.4 1.3v23c-.1.9-.3 1.2-.4 1.4-.2.2-.1.5.4.5h5.3V17h2.4l1.7 2.9 2.1 3.6 1 1.8c1.2 2 2.3 3.3 4.2 3.6.2 0 1.2.2 1.6.2h.4c.8 0 1.6-.3 2.1-.5 0 0 .1-.1.2-.1.7-.4.5-.8.2-.9zM9.2 13.2H5.8V3.8h3.4c1.7 0 3 .2 3.9 1.1.4.3.6.7.8 1.2.2.6.4 1.3.4 2.2 0 1.2-.1 4.9-5.1 4.9zM28.5 17h6.1v-3.8h-6.1V7.6h9.3V3.8H23.3v22.9h14.5v-3.8h-9.3V17z"
                    fill="#ffffff"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <div className="header-right">
            <ul className="nav-large">
              <li>1844-888-8888</li>
              <li className="buy ">
                Buy
                <ul>
                  <li>
                    <p>Buy with Bluefin</p>
                  </li>
                  <li>
                    <p>Affordability Calculator</p>
                  </li>
                  <li>
                    <p>Home Buying Guide</p>
                  </li>
                  <li>
                    <p>Compare Mortgage Rates</p>
                  </li>
                  <li>
                    <p>Find Lenders & Inspectors</p>
                  </li>
                  <li>
                    <p>Free Home Buying Classes</p>
                  </li>
                </ul>
              </li>
              <li className="sell">
                Sell
                <ul>
                  <li>
                    <p>Sell with Bluefin</p>
                  </li>
                  <li>
                    <p>What is My Home Worth</p>
                  </li>
                  <li>
                    <p>Will Selling Pay Off?</p>
                  </li>
                  <li>
                    <p>Home Selling Guide</p>
                  </li>
                  <li>
                    <p>Find Handypeople & Stagers</p>
                  </li>
                </ul>
              </li>
              <li>Real Estate Agents</li>
              <li>
                <button className="button " type="button ">
                  Log In
                </button>
              </li>
              <li>
                <button className="button ">Sign Up</button>
              </li>
            </ul>
          </div>
        </nav>
        {/*side navigation*/}
        <div id = "side-nav" className="side-nav" style={{height: divStyle}} ref = { this.sideNav } >
        {/*<div id="Menu" className="Menu">*/}
          <p className="btn-close" onClick={this.closeSlideMenu}>
            &times;
          </p>
          <a href="">Buy</a>
          <a href="">Sell</a>
          <a href="">Real Estate Agents</a>
          <a href="">Sign Up</a> 
        </div>
      </div>
    );
  }
}

export default NavBar;
