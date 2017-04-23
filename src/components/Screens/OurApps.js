import React from "react";
import reqwest from "reqwest";
import Carousel from "nuka-carousel";
import "../../styles/Screens/OurApps.css";
import BulletControl from "./BulletControl";
import PreviousControl from "./PreviousControl";
import NextControl from "./NextControl";
import Slide from "./Slide";
import {Grid} from "semantic-ui-react";

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
  getAvailableApps() {
    if (!global.IS_CLIENT)
      return;
    reqwest({
      url: "https://itunes.apple.com/search?term=oleksandr+nikolaievskiy\
&country=ru&entity=software&attribute=softwareDeveloper",
      type: "jsonp"
    }).then(response => {
      return response.results.map(item => {
        let {
          artworkUrl512: icon, description, screenshotUrls,
          trackName: name, trackViewUrl: url, bundleId
        } = item;
        description = description.split("\n").join("<br/>");
        return {icon, description, screenshotUrls, name, url, bundleId};
      });
    }).then(extract => {
      this.setState({extract});
    }).catch(err => console.log(err));
  }
  getNeededDecorators() {
    return (this.state.extract.length > one) ? decoratorsIfMoreOne : [];
  }
  componentWillMount() {
    this.getAvailableApps();
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
              <Slide app={app}
                  key={app.bundleId}/>
            )
          })}
          </Carousel>
        </Grid.Column>
      </Grid>
    );
  }
}

export default OurApps;
