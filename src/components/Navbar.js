import React from "react";

import Navigation from "./Navigation.js";
import "src/styles/Navbar.css";

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <div className="navbar__content">
          <div className="logo">
            <img src="src/img/navbar/logo.svg" />
          </div>
          <div>
            <Navigation classes="navigation__page-scroller--green"/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
