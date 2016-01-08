import React from "react";

import Navigation from "./Navigation.js";
import "src/styles/Navbar.css";

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <section className="navbar__content">
          <figure className="logo">
            <img src="src/img/navbar/logo.svg" />
          </figure>
          <section className="navigation-container">
            <Navigation classes="navigation__page-scroller--green"
                offset={Navbar.offset}
            />
          </section>
        </section>
      </nav>
    );
  }
}

export default Navbar;
