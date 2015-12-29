import React from "react";
import {Link} from "react-scroll";

import "src/styles/Navigation.css";

class Navigation extends React.Component {
  renderMenuLink(name, text = name, setActive) {
    return (
      <Link className={name + (setActive ? " active": "")}
          to={name}
          {...Navigation.linkProps}
      >
        {text}
      </Link>
    );
  }
  render () {
    let className = "navigation__page-scroller " + this.props.classes;
    return (
        <ul className="navigation">
          <li className={className}>
            {this.renderMenuLink("Applications", "Applications", true)}
          </li>
          <li className={className}>
            {this.renderMenuLink("Technologies")}
          </li>
          <li className={className}>
            {this.renderMenuLink("Socials")}
          </li>
          <li className={className}>
            {this.renderMenuLink("Investors", "For investors")}
          </li>
        </ul>
    );
  }
}

Navigation.linkProps = {
  duration: 200,
  offset: -124,
  spy: true,
  smooth: true,
  onSetActive: onSetActive
};

function onSetActive(to) {
  let navlist = document.querySelectorAll(".navigation .active");
  [...navlist].forEach((node) => node.classList.remove("active"));
  navlist = document.querySelectorAll(".navigation ." + to);
  [...navlist].forEach((node) => node.classList.add("active"));
}

Navigation.propTypes = {
  classes: React.PropTypes.string
}

export default Navigation;
