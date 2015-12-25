import React from "react";
import Scroll from "react-scroll";

import OurApps from "./OurApps.js";
import Technologies from "./Technologies.js";
import OurWorld from "./OurWorld.js";
import ForInvestors from "./ForInvestors.js";

import "src/styles/Screens/Screens.css";
import "src/styles/Text.css";

const Element = Scroll.Element;

class Screens extends React.Component {
  render () {
    return (
      <main>
        <Element className="screen our-apps" name="apps">
          <OurApps/>
        </Element>
        <Element className="screen" name="tech">
          <Technologies/>
        </Element>
        <Element className="screen" name="socials">
          <OurWorld/>
        </Element>
        <Element className="screen" name="investors">
          <ForInvestors/>
        </Element>
      </main>
    );
  }
}

export default Screens;
