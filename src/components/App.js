import React from "react";
import $ from "jquery";
import {Sidebar, Segment} from "semantic-ui-react";

import "../styles/App.css";

import Navbar from "./Navbar";
import Screens from "./Screens/Screens";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navbarHeight: 150};
    this.onWindowResize = () => {
      if (!global.IS_CLIENT)
        return;
      let navbarHeight = $(".navbar").first().clientHeight;
      if (navbarHeight != this.state.navbarHeight)
        this.setState({navbarHeight});
    }
  }
  componentDidMount() {
    if (global.IS_CLIENT) {
      window.addEventListener("resize", this.onWindowResize, true);
      this.onWindowResize();
    }
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Sidebar.Pushable as={Segment}>
          <Screens paddingTop={this.state.navbarHeight}/>
          <Footer/>
        </Sidebar.Pushable>
      </div>
    );
  }
  componentWillUnmount() {
    if (global.IS_CLIENT) {
      window.removeEventListener("resize", this.onWindowResize);
    }
  }
}

export default App;
