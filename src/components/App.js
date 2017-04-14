import React from "react";

if (global.IS_CLIENT) {
  require("semantic-ui-css");
  require("semantic-ui-js");
}

import "src/styles/App.css";

import Navbar from "./Navbar.js";
import Screens from "./Screens/Screens.js";
import Footer from "./Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navbarHeight: 150};
    this.onWindowResize = () => {
      if (!IS_CLIENT)
        return;
      let navbarHeight = $(".navbar")[0].clientHeight;
      if (navbarHeight != this.state.navbarHeight)
        this.setState({navbarHeight});
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize, true);
    this.onWindowResize();
  }
  render() {
    return (
      <div>
      	<div className="full-height">
        	<Navbar/>
        	<Screens paddingTop={this.state.navbarHeight}/>
        </div>
        <Footer/>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }
}

export default App;
