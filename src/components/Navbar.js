import React from "react";
import {Link} from "react-scroll";
import "src/styles/Navbar.css";
import $ from "jquery";
import {Grid, Sidebar, Segment} from "semantic-ui-react";

const argumentsSet = [
  ["Applications"],
  ["Technologies"],
  ["Socials"],
  ["Investors", "For investors"]
];
const totalPossible = 16;
const computerColumns = 5, tabletColumns = 4;

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
        if (((rect.top - navbarHeight) < boundY) &&
            ((rect.bottom - navbarHeight) > boundY)) {
          if (name1 != this.state.activeLinkName)
            this.setState({activeLinkName: name1});
          break;
        }
      }
    }
  }

  adjustNavBar = () => {
    Navbar.linkProps.offset = -($(".navbar")[0].clientHeight);
  };

  componentDidMount() {
    if (global.IS_CLIENT) {
      window.addEventListener("scroll", this.onWindowScroll, true);
      window.addEventListener("resize", this.adjustNavBar, true);
      this.adjustNavBar();
    }
  }
  renderMenuLink(name, text = name) {
    let isActive = (this.state.activeLinkName == name);
    return (
      <Grid.Column className={"navigation__page-scroller " +
                              "navigation__page-scroller--green"}
          computer={Math.floor(totalPossible / computerColumns)}
          key={name}
          mobile={totalPossible / 2}
          tablet={totalPossible / tabletColumns}
      >
        <Link className={name + (isActive ? " true-active": "")}
            to={name}
            {...Navbar.linkProps}
        >
          {text}
        </Link>
      </Grid.Column>
    );
  }
  render() {
    return (
      <Sidebar animation="push"
          as={Segment}
          className="navbar"
          direction="top"
          visible
      >
        <Grid className="page"
            columns={argumentsSet.length}
            textAlign="center"
        >
          <Grid.Column computer={Math.floor(totalPossible / computerColumns)}
              tablet={totalPossible}
          >
            <img id="logo"
                src="src/img/navbar/logo.svg"/>
          </Grid.Column>
          {argumentsSet.map((item) => this.renderMenuLink(...item))}
        </Grid>
      </Sidebar>
    );
  }
  componentWillUnmount() {
    if (global.IS_CLIENT) {
      window.removeEventListener("scroll", this.onWindowScroll);
      window.removeEventListener("resize", this.adjustNavBar);
    }
  }
}

Navbar.linkProps = {
  duration: 200,
  offset: 0,
  spy: true,
  smooth: true
};

export default Navbar;
