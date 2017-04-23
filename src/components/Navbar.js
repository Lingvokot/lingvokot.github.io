import React from "react";
import {Link} from "react-scroll";
import "../styles/Navbar.css";
import $ from "jquery";
import {Grid, Sidebar, Segment} from "semantic-ui-react";

const argumentsSet = [
  {name: "Applications"},
  {name: "Technologies"},
  {name: "Socials"},
  {name: "Investors", text: "For investors"}
];
const totalPossible = 16;
const computerColumns = 5, tabletColumns = 4, mobileColumns = 2;
const zero = 0;
const middleQuotient = 0.5;

//WARNING: the wheel was invented here!!!
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeLinkName: argumentsSet[zero].name};
    this.onWindowScroll = () => {
      if (!global.IS_CLIENT)
        return;
      let navbarHeight = -(Navbar.linkProps.offset);
      const sectionsNames = argumentsSet.map(item => item[zero]);
      for (let name1 of sectionsNames) {
        let associatedElement = $("div[name=\"" + name1 + "\"]").first();
        let rect = associatedElement.getClientRects()[zero];
        let boundY = (window.innerHeight - navbarHeight) * middleQuotient;
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
    Navbar.linkProps.offset = -($(".navbar").first().clientHeight);
  };

  componentDidMount() {
    if (global.IS_CLIENT) {
      window.addEventListener("scroll", this.onWindowScroll, true);
      window.addEventListener("resize", this.adjustNavBar, true);
      this.adjustNavBar();
    }
  }
  renderMenuLink(name, text) {
    let isActive = (this.state.activeLinkName == name);
    return (
      <Grid.Column className={"navigation__page-scroller " +
                              "navigation__page-scroller--green"}
          computer={Math.floor(totalPossible / computerColumns)}
          key={name}
          mobile={totalPossible / mobileColumns}
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
          {
            argumentsSet.map((item) => {
              this.renderMenuLink(item.name, item.text || item.name)
            })
          }
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
