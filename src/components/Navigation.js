import React from "react";
import {Link} from "react-scroll";

import "src/styles/Navigation.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSection: "Applications"};
  }
  renderMenuLink(name, text = name) {
    return (
      <Link className={name + ((name == this.state.activeSection) ? " active": "")}
          to={name} onSetActive={() => {
            console.log(`onSetActive: name ${name}`)
            this.setState({activeSection: name});
          }}
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
            {this.renderMenuLink("Applications")}
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
  smooth: true
};

Navigation.propTypes = {
  classes: React.PropTypes.string
}

export default Navigation;
