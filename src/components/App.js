import React from "react";
import "src/styles/App.css";

import Navbar from "./Navbar.js";
import Screens from "./Screens/Screens.js";
import Footer from "./Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navbarHeight: 0};
    this.onWindowResize = () => {
      let navbarHeight = $(".navbar")[0].clientHeight;
      if (navbarHeight != this.state.navbarHeight) {
        console.log("navbarHeight: " + navbarHeight);
        this.setState({navbarHeight});
      }
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
