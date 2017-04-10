import React from "react";
import axios from "axios";
import reqwest from "reqwest";
import Carousel from "nuka-carousel";
import "src/styles/Screens/OurApps.css";

const settings = {
  wrapAround: true,
  speed: 500,
  slidesToShow: 1,
  decorators: [{
    component: React.createClass({
      shouldComponentUpdate: function(nextProps, nextState) {
        let shouldUpdate = false;
        if ((this.props.currentSlide !== nextProps.currentSlide) ||
            (this.props.slideCount !== nextProps.slideCount))
          shouldUpdate = true;
        return shouldUpdate;
      },
      render: function() {
        let props = this.props;
        let slideCount = props.slideCount;
        let buttons = [];
        for (let i = 0; i < slideCount; i++) {
          let active = '';
          if (props.currentSlide === i)
            active = 'active';
          buttons.push(
            <li className={"carousel-control " + active} key={i}
                onClick={props.goToSlide.bind(null,i)}></li>
          );
        }
        return (<ul className="carousel-controls">{buttons}</ul>);
      }
    }),
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
      console.log(JSON.stringify(extract));
      this.setState({extract});
    }).catch(err => console.log(err));
  }
  componentWillMount() {
    this.getAvailableApps();
  }
  render() {
    return (
      <div className="ui stackable one column grid">
        <div className="column">
          <Carousel {...settings}>
          {
            this.state.extract.map((app) => {
              return (
                <div className="ui stackable two column grid" key={app.bundleId} style={{paddingBottom: 40}}>
                  <div className="column">
                    <img alt="screenshot" src={app.screenshotUrls[0] || "src/img/apps/devices.svg"}
                        className="image"/>
                  </div>
                  <div className="column">
                    <div className="ui two column grid">
                      <div className="sixteen wide column">
                        <h2 className="header header--level-2">
                          <div className="header--big">Applications</div>
                          <div className="header--small header--heavy">
                            You want to use
                          </div>
                        </h2>
                        <h3 className="header header--level-3 header--green">
                          {app.name}
                        </h3>
                        <p className="text text--green"
                            dangerouslySetInnerHTML={{__html: app.description}}></p>
                      </div>
                      <div className="column">
                        <div className="row">
                          <div className="column above-shadow">
                            <a title="Get it on App Store" className="store-link" href={app.url}>
                              <img alt="App Store" src="src/img/apps/app-store.svg"/>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column shadow-container">
                            <img src="src/img/apps/app-store-button-shadow.svg"/>
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="row">
                          <div className="column above-shadow">
                            <a title="Get it on Google Play" className="store-link"
                                href={"https://play.google.com/store/apps/details?id=" + app.bundleId}>
                              <img alt="Google Play" src="src/img/apps/google-play.svg"/>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column shadow-container">
                            <img src="src/img/apps/google-play-button-shadow.svg"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </Carousel>
        </div>
      </div>
    );
  }
}

export default OurApps;
