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
      <div className="ui grid">
        <Element className="screen our-apps row" name="Applications">
          <OurApps/>
        </Element>
        <Element className="screen row" name="Technologies">
          <Technologies/>
        </Element>
        <Element className="screen row" name="Socials">
          <OurWorld/>
        </Element>
        <Element className="screen row" name="Investors">
          <ForInvestors/>
        </Element>
      </div>
    );
  }
}

export default Screens;
