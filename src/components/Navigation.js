import React from "react";
import {Link} from "react-scroll";

import "src/styles/Navigation.css";

class Navigation extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.offset) {
      Navigation.linkProps.offset = nextProps.offset;
    }
  }
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
  classes: React.PropTypes.string,
  offset: React.PropTypes.number
}

export default Navigation;
