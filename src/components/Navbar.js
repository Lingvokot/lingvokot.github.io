import React from "react";
import {Link} from "react-scroll";
import "src/styles/Navbar.css";
import $ from "jquery";
import {Grid, Sidebar, Segment, Menu} from "semantic-ui-react";

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
    this.onWindowScroll = () => {
      if (!global.IS_CLIENT)
        return;
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
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onWindowScroll, true);
  }
  renderMenuLink(name, text = name) {
    let isActive = (this.state.activeLinkName == name);
    return (
      <Grid.Column mobile={8} tablet={4} computer={3} key={name}
                  className={"navigation__page-scroller navigation__page-scroller--green"}>
        <Link className={name + (isActive ? " true-active": "")} to={name} {...Navbar.linkProps}>
          {text}
        </Link>
      </Grid.Column>
    );
  }
  render() {
    return (
      <Sidebar as={Segment} animation='push' direction='top' visible className="navbar">
        <Grid textAlign="center" columns={argumentsSet.length} className="page">
          <Grid.Column tablet={16} computer={3}>
            <img id="logo" src="src/img/navbar/logo.svg"/>
          </Grid.Column>
          {argumentsSet.map((item) => this.renderMenuLink(...item))}
        </Grid>
      </Sidebar>
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
