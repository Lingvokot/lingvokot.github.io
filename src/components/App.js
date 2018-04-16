import React from "react";
import $ from "jquery";

import "../styles/App.css";

import Navbar from "./Navbar";
import Screens from "./Screens/Screens";
import Footer from "./Footer";
import {animateScroll} from "react-scroll";
const zero = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navbarHeight: 180};
    this.onWindowResize = () => {
      if (!global.IS_CLIENT)
        return;
      let navbarHeight = $(".navbar")[zero].clientHeight;
      if (navbarHeight != this.state.navbarHeight)
        this.setState({navbarHeight});
    }
  }
  componentDidMount() {
    if (global.IS_CLIENT) {
      window.addEventListener("resize", this.onWindowResize, true);
      this.onWindowResize();
      window.addEventListener("load", () => {
        animateScroll.scrollToTop({ delay: 1, smooth: false, duration: 1 });
      }, true);
    }
  }
  componentWillUnmount() {
    if (global.IS_CLIENT) {
      window.removeEventListener("resize", this.onWindowResize);
    }
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Screens paddingTop={this.state.navbarHeight}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
