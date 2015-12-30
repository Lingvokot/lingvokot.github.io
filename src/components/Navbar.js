import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./Navigation.js";
import "src/styles/Navbar.css";

class Navbar extends React.Component {
  componentDidMount() {
    Navbar.offset = -ReactDOM.findDOMNode(this).offsetHeight;
    console.log(Navbar.offset);
    this.forceUpdate();
  }
  render () {
    return (
      <nav className="navbar">
        <div className="navbar__content">
          <div className="logo">
            <img src="src/img/navbar/logo.svg" />
          </div>
          <div className="navigation-container">
            <Navigation classes="navigation__page-scroller--green"
                offset={Navbar.offset}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
