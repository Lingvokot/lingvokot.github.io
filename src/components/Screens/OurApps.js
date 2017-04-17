import React from "react";
import axios from "axios";
import reqwest from "reqwest";
import Carousel from "nuka-carousel";
import "src/styles/Screens/OurApps.css";
import BulletControl from "./BulletControl.js";
import Slide from "./Slide.js";
import {Grid} from 'semantic-ui-react';

const settings = {
  wrapAround: true,
  speed: 500,
  slidesToShow: 1,
  decorators: [{
    component: BulletControl,
    position: "BottomCenter",
    style: {}
  }]
};

class OurApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {extract: []};
  }
  getAvailableApps() {
    if (!IS_CLIENT)
      return;
    reqwest({
      url: "https://itunes.apple.com/search?term=oleksandr+nikolaievskiy&country=ru&entity=software\
&attribute=softwareDeveloper",
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
  componentWillMount() {
    this.getAvailableApps();
  }
  render() {
    return (
      <Grid stackable columns={1}>
        <Grid.Column width={16}>
          <Carousel {...settings}>
          {this.state.extract.map((app) => {
            return (<Slide app={app} key={app.bundleId}/>)
          })}
          </Carousel>
        </Grid.Column>
      </Grid>
    );
  }
}

export default OurApps;
