import React from "react";
import Scroll from "react-scroll";

import "src/styles/Navigation.css";

let Link = Scroll.Link;

class Navigation extends React.Component {
  render () {
    let className = "navigation__page-scroller " + this.props.classes;
    return (
        <ul className="navigation">
          <li className={className}>
            <Link to="apps" spy={true} smooth={true} duration={200}>
              Applications
            </Link>
          </li>
          <li className={className}>
            <Link to="tech" spy={true} smooth={true} duration={200}>
              Technologies
            </Link>
          </li>
          <li className={className}>
            <Link to="socials" spy={true} smooth={true} duration={200}>
              Socials
            </Link>
          </li>
          <li className={className}>
            <Link to="investors" spy={true} smooth={true} duration={200}>
              For investors
            </Link>
          </li>
        </ul>
    );
  }
}

Navigation.propTypes = {
  classes: React.PropTypes.string
}

export default Navigation;
