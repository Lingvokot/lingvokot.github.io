import React from "react";
import Scroll from "react-scroll";
import {Grid, Sidebar} from "semantic-ui-react";
import PropTypes from "prop-types";

import OurApps from "./OurApps";
import Technologies from "./Technologies";
import OurWorld from "./OurWorld";
import ForInvestors from "./ForInvestors";

import "../../styles/Screens/Screens.css";
import "../../styles/Text.css";

const Element = Scroll.Element;

class Screens extends React.Component {
  render () {
    return (
      <Sidebar.Pusher>
        <Grid columns={1}>
          <Element className="screen our-apps column"
              name="Applications"
              style={{paddingTop: this.props.paddingTop}}
          >
            <OurApps/>
          </Element>
          <Element className="screen column"
              name="Technologies"
          >
            <Technologies/>
          </Element>
          <Element className="screen column"
              name="Socials"
          >
            <OurWorld/>
          </Element>
          <Element className="screen column"
              name="Investors"
          >
            <ForInvestors/>
          </Element>
        </Grid>
      </Sidebar.Pusher>
    );
  }
}

Screens.propTypes = {
  paddingTop: PropTypes.number
}

export default Screens;
