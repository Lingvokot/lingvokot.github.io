import React from "react";
import "src/styles/App.css";

import Navbar from "./Navbar.js";
import Screens from "./Screens/Screens.js";
import Footer from "./Footer.js";

class App extends React.Component {
  render () {
    return (
      <div className="pusher">
      	<div className="full-height">
        	<Navbar/>
        	<Screens/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
