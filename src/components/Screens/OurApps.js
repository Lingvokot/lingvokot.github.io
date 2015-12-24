import React from "react";
import "src/styles/Screens/OurApps.css";

class OurApps extends React.Component {
  render () {
    return (
      <section className="section section--green">
        <div className="section__content">
          <div className="slider">
            <div className="devices">
              <img src="src/img/apps/devices.svg"/>
            </div>
            <div className="slider__right-part">
              <div>
                <h2 className="header header--level-2">
                  <div className="header--big">Applications</div>
                  <div className="header--small header--heavy">
                    You want to use
                  </div>
                </h2>
                <h3 className="header header--level-3 header--green">
                  Translator-Q
                </h3>
                <p className="text text--green">
                  Inspired by minimalist art, Dots was created with the notion
                  that beauty and fun are not mutually exclusive. Dots is a
                  minimalist game that was designed to be a soothing experience.
                  But dig deeper and there is a depth of challenging
                </p>
              </div>
              <div className="store-buttons">
                <div className="app-store">
                  <a className="store-link" href="">
                    <img src="src/img/apps/app-store.svg"/>
                  </a>
                  <img src="src/img/apps/app-store-button-shadow.svg"/>
                </div>
                <div className="google-play">
                  <a className="store-link" href="">
                    <img src="src/img/apps/google-play.svg"/>
                  </a>
                  <img src="src/img/apps/google-play-button-shadow.svg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurApps;
