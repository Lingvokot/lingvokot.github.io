import React from "react";
import "src/styles/Screens/OurApps.css";

class OurApps extends React.Component {
  render () {
    return (
      <div className="ui stackable two column grid">
        <div className="column">
          <img alt="devices photo" src="src/img/apps/devices.svg" className="image"/>
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
                Coming soon...
              </h3>
              <p className="text text--green">
We are busy with creating applications. Please, look for our apps in several 
weeks in AppStore or Google Play Market. You will adopt them.
              </p>
            </div>
            <div className="column">
              <div className="one column grid">
                <div className="column above-shadow">
                  <a title="Get it on App Store" className="store-link"
                    href="https://itunes.apple.com/ru/developer/oleksandr-nikolaievskyi/id1097334529">
                    <img alt="App Store" src="src/img/apps/app-store.svg"/>
                  </a>
                </div>
              </div>
              <div className="column shadow-container">
                <img src="src/img/apps/app-store-button-shadow.svg"/>
              </div>
            </div>
            <div className="column">
              <div className="one column grid">
                <div className="column above-shadow">
                  <a title="Get it on Google Play" className="store-link"
                    href="https://play.google.com/store/apps/developer?id=Lingvokot">
                    <img alt="Google Play" src="src/img/apps/google-play.svg"/>
                  </a>
                </div>
                <div className="column shadow-container">
                  <img src="src/img/apps/google-play-button-shadow.svg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurApps;
