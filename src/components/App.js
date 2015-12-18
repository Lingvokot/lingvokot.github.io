import React from "react";
import "src/styles/App.css";

import Navbar from "./Navbar.js";
import Screens from "./Screens/Screens.js";
import Footer from "./Footer.js";

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Screens/>
        <Footer/>
      </div>
    );
  }
}

export default App;
