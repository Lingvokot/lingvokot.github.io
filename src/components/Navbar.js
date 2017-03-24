import React from "react";
import {Link} from "react-scroll";
import "src/styles/Navbar.css";

const argumentsSet = [
  ["Applications"],
  ["Technologies"],
  ["Socials"],
  ["Investors", "For investors"]
];

//WARNING: the wheel was invented here!!!
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeLinkName: argumentsSet[0][0]};
  }
  componentDidMount() {
    window.addEventListener("scroll", () => this.onWindowScroll(), true);
  }
  onWindowScroll() {
    let navbarHeight = -(Navbar.linkProps.offset);
    const sectionsNames = argumentsSet.map(item => item[0]);
    for (let name1 of sectionsNames) {
      let associatedElement = $("div[name=\"" + name1 + "\"]")[0];
      let rect = associatedElement.getClientRects()[0];
      let boundY = (window.innerHeight - navbarHeight) / 2;
      //let the link be active if and only if the respective element
      //has a top bound upper than half of inner window free of navbar
      //and has a bottom bound lower than half of inner window free of navbar
      if (((rect.top - navbarHeight) < boundY) && ((rect.bottom - navbarHeight) > boundY)) {
        if (name1 != this.state.activeLinkName)
          this.setState({activeLinkName: name1});
        break;
      }
    }
  }
  renderMenuLink(name, text = name) {
    let isActive = (this.state.activeLinkName == name);
    return (
      <div className="item navigation__page-scroller navigation__page-scroller--green" key={name}>
        <Link className={name + (isActive ? " true-active": "")} to={name} {...Navbar.linkProps}>
          {text}
        </Link>
      </div>
    );
  }
  render() {
    Navbar.linkProps.offset = -($(".ui.top.fixed.menu.navbar")[0].clientHeight);
    return (
      <div className="ui top fixed menu navbar">
        <div className="item logo-container">
          <img id="logo" src="src/img/navbar/logo.svg"/>
        </div>
        {argumentsSet.map((item) => this.renderMenuLink(...item))}
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScroll);
  }
}

Navbar.linkProps = {
  duration: 200,
  offset: 0,
  spy: true,
  smooth: true
};

export default Navbar;
