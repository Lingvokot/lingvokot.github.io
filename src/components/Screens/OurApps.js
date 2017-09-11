import React from "react";
import Carousel from "nuka-carousel";
import "../../styles/Screens/OurApps.css";
import BulletControl from "./BulletControl";
import PreviousControl from "./PreviousControl";
import NextControl from "./NextControl";
import Slide from "./Slide";
import {Grid} from "semantic-ui-react";
import appData from "./app-data.json";

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
  componentWillMount() {
    this.getAvailableApps();
  }
  getNeededDecorators() {
    return (this.state.extract.length > one) ? decoratorsIfMoreOne : [];
  }
  getAvailableApps() {
    if (!global.IS_CLIENT)
      return;
    this.setState({extract: appData});
  }
  render() {
    return (
      <Grid columns={1}
          stackable
      >
        <Grid.Column width={totalPossible}>
          <Carousel {...settings}
              decorators={this.getNeededDecorators()}
              dragging={this.state.extract.length > one}
              swiping={this.state.extract.length > one}
          >
          {this.state.extract.map((app) => {
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

export default OurApps;
