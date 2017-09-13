import React from "react";
import Carousel from "nuka-carousel";
import "../../styles/Screens/OurApps.css";
import BulletControl from "./BulletControl";
import PreviousControl from "./PreviousControl";
import NextControl from "./NextControl";
import Slide from "./Slide";
import {Grid} from "semantic-ui-react";
import appData from "./app-data.json";
import PropTypes from "prop-types";

const decoratorsIfMoreOne = [{
  component: BulletControl,
  position: "BottomCenter",
  style: {}
}, {
  component: PreviousControl,
  position: "CenterLeft",
  style: {}
}, {
  component: NextControl,
  position: "CenterRight",
  style: {}
}];
const settings = {
  wrapAround: true,
  speed: 500,
  slidesToShow: 1
};
const totalPossible = 16;
const one = 1;

class OurApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {extract: []};
  }
  getNeededDecorators() {
    return (this.props.apps.length > one) ? decoratorsIfMoreOne : [];
  }
  render() {
    return (
      <Grid columns={1}
          stackable
      >
        <Grid.Column width={totalPossible}>
          <Carousel {...settings}
              decorators={this.getNeededDecorators()}
              dragging={this.props.apps.length > one}
              swiping={this.props.apps.length > one}
          >
          {this.props.apps.map((app) => {
            return (
              <Slide {...app}
                  key={app.bundleId}
              />
            )
          })}
          </Carousel>
        </Grid.Column>
      </Grid>
    );
  }
}

// `apps` property was added in order to help make good tests for this component
OurApps.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    description: PropTypes.string,
    screenshotUrls: PropTypes.arrayOf(PropTypes.string),
    iOSURL: PropTypes.string,
    androidURL: PropTypes.string,
    bundleId: PropTypes.string
  }))
};

OurApps.defaultProps = {
  apps: appData
};

export default OurApps;
