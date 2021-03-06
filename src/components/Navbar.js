import React from "react";
import "../styles/Navbar.css";
import $ from "jquery";
import {
  Grid,
  Image,
  Menu,
} from "semantic-ui-react";
import MenuLink from "./MenuLink";

const argumentsSet = [
  {name: "Applications"},
  {name: "Technologies"},
  {name: "Socials"},
  {name: "Investors", text: "For investors"}
];
const totalPossible = 16;
const computerColumns = 5;
const zero = 0;
const one = 1;
const middleQuotient = 0.5;

//WARNING: the wheel was invented here!!!
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeLinkName: argumentsSet[zero].name};
    this.onWindowScroll = () => {
      if (!global.IS_CLIENT)
        return;
      let navbarHeight = -(Navbar.offset);
      const sectionsNames = argumentsSet.map(item => item.name);
      for (let name1 of sectionsNames) {
        let associatedElement = $(`div[name="${name1}"]`)[zero];
        let rect = associatedElement.getClientRects()[zero];
        let boundY = (window.innerHeight - navbarHeight) * middleQuotient;
        //let the link be active if and only if the respective element
        //has a top bound upper than half of inner window free of navbar
        //and has a bottom bound lower than half of inner window free of navbar
        if (((rect.top - navbarHeight) < boundY) &&
            ((rect.bottom - navbarHeight) > boundY) &&
            (name1 != this.state.activeLinkName)) {
          this.setState({activeLinkName: name1});
          break;
        }
      }
    }
  }
  componentWillMount() {
    if (global.IS_CLIENT) {
      window.addEventListener("load", () => {
        window.addEventListener("scroll", this.onWindowScroll, true);
      }, true);
    }
  }
  componentDidMount() {
    if (global.IS_CLIENT) {
      window.addEventListener("resize", this.adjustNavBar, true);
      this.adjustNavBar();
    }
  }
  componentWillUnmount() {
    if (global.IS_CLIENT) {
      window.removeEventListener("scroll", this.onWindowScroll);
      window.removeEventListener("resize", this.adjustNavBar);
    }
  }
  adjustNavBar = () => {
    Navbar.offset = -($(".navbar")[zero].clientHeight);
  };
  render() {
    return (
      <Menu className="navbar"
          fixed="top"
      >
        <Grid className="page"
            columns={argumentsSet.length + one}
            textAlign="center"
        >
          <Grid.Column
              className="logo-container"
              computer={Math.floor(totalPossible / computerColumns)}
              tablet={totalPossible}
          >
            <Image centered
                id="logo"
                size="small"
                src="src/img/navbar/logo.svg"
            />
          </Grid.Column>
          {
            argumentsSet.map((item) => (
              <MenuLink isActive={item.name == this.state.activeLinkName}
                  key={item.name}
                  name={item.name}
                  offset={Navbar.offset}
                  text={item.text || item.name}
              />
            ))
          }
        </Grid>
      </Menu>
    );
  }
}

Navbar.offset = 0;

export default Navbar;
