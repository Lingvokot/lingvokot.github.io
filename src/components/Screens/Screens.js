import React from "react";

import OurApps from "./OurApps.js";
import Technologies from "./Technologies.js";
import OurWorld from "./OurWorld.js";
import ForInvestors from "./ForInvestors.js";

import "src/styles/Screens/Screens.css";
import "src/styles/Text.css";

class Screens extends React.Component {
  render () {
    return (
      <main>
        <OurApps/>
        <Technologies/>
        <OurWorld/>
        <ForInvestors/>
      </main>
    );
  }
}

export default Screens;
