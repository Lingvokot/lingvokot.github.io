import React from "react";

/*import Navigation from "./Navigation.js";
import React from "react";*/
import {Link} from "react-scroll";
import "src/styles/Navbar.css";

const argumentsSet = [
  ["Applications"],
  ["Technologies"],
  ["Socials"],
  ["Investors", "For investors"]
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeLinkName: argumentsSet[0][0]};
  }
  renderMenuLink(name, text = name) {
    let isActive = (this.state.activeLinkName == name);
    return (
      <div className="item navigation__page-scroller navigation__page-scroller--green" key={name}>
        <Link className={name + (isActive ? " active": "")}
            to={name}
            {...Navbar.linkProps}
            onSetActive={() => this.setState({activeLinkName: name})}>
          {text}
        </Link>
      </div>
    );
  }
  render () {
    return (
      <div className="ui top fixed menu navbar">
        <div className="item logo-container">
          <img id="logo" src="src/img/navbar/logo.svg"/>
        </div>
        {argumentsSet.map((item) => this.renderMenuLink(...item))}
      </div>
    );
  }
}

Navbar.linkProps = {
  duration: 200,
  offset: -80,
  spy: true,
  smooth: true
};



export default Navbar;
