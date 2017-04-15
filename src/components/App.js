import React from "react";
import $ from 'jquery';
import {Sidebar, Segment} from 'semantic-ui-react';

import "src/styles/App.css";

import Navbar from "./Navbar.js";
import Screens from "./Screens/Screens.js";
import Footer from "./Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navbarHeight: 150};
    this.onWindowResize = () => {
      if (!global.IS_CLIENT)
        return;
      let navbarHeight = $(".navbar")[0].clientHeight;
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
