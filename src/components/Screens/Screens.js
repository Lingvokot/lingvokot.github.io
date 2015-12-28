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
        <Element className="screen our-apps" name="Applications">
          <OurApps/>
        </Element>
        <Element className="screen" name="Technologies">
          <Technologies/>
        </Element>
        <Element className="screen" name="Socials">
          <OurWorld/>
        </Element>
        <Element className="screen" name="Investors">
          <ForInvestors/>
        </Element>
      </main>
    );
  }
}

export default Screens;
