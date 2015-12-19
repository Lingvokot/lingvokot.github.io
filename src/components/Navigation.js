import React from "react";
import "src/styles/Navigation.css";

class Navbar extends React.Component {
  render () {
    let className = "navigation__page-scroller " + this.props.classes;
    return (
      <ul className="navigation">
        <li className={className}>Applications</li>
        <li className={className}>Technologies</li>
        <li className={className}>Socials</li>
        <li className={className}>For investors</li>
      </ul>
    );
  }
}

Navbar.propTypes = {
  classes: React.PropTypes.string
}

export default Navbar;
