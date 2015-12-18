import React from "react";

import OurApps from "./OurApps.js";
import Technologies from "./Technologies.js";
import OurWorld from "./OurWorld.js";
import ForInvestors from "./ForInvestors.js";

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
