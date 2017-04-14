import React from "react";

class Slide extends React.Component {
	render() {
    let app = this.props.app;
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
  }
}

export default Slide;