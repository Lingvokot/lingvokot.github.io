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
            <div>
              <div className="slider__right-part">
                <h2 className="header header--level-2">
                  <span className="header--big">Applications<br/></span>
                  <span className="header--small header--heavy">
                    You want to use
                  </span>
                </h2>
                <h3 className="header header--level-3 header--green">Translator-Q</h3>
                <p className="text text--green">
                  Inspired by minimalist art, Dots was created with the notion
                  that beauty and fun are not mutually exclusive. Dots is a
                  minimalist game that was designed to be a soothing experience.
                  But dig deeper and there is a depth of challenging
                </p>
              </div>
              <div className="store-buttons">
                <div className="app-store">
                  <img src="src/img/apps/app-store.svg"/>
                </div>
                <div className="google-play">
                  <img src="src/img/apps/google-play.svg"/>
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
