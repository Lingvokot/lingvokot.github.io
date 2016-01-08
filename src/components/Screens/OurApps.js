import React from "react";
import "src/styles/Screens/OurApps.css";

class OurApps extends React.Component {
  render () {
    return (
      <section className="section section--green">
        <section className="section__content">
          <section className="slider">
            <figure className="devices">
              <img alt="devices photo" src="src/img/apps/devices.svg"/>
            </figure>
            <section className="slider__right-part">
              <article>
                <h2 className="header header--level-2">
                  <div className="header--big">Applications</div>
                  <div className="header--small header--heavy">
                    You want to use
                  </div>
                </h2>
                <h3 className="header header--level-3 header--green">
                  Coming soon
                </h3>
                <p className="text text--green">
                  Coming soon
                </p>
              </article>
              <ul className="store-buttons">
                <li className="app-store">
                  <a title="Get it on App Store" className="store-link" href="">
                    <img alt="App Store" src="src/img/apps/app-store.svg"/>
                  </a>
                  <img src="src/img/apps/app-store-button-shadow.svg"/>
                </li>
                <li className="google-play">
                  <a title="Get it on Google Play" className="store-link"
                    href="http://play.google.com/store/search?q=pub:Lingvokot">
                    <img alt="Google Play" src="src/img/apps/google-play.svg"/>
                  </a>
                  <img src="src/img/apps/google-play-button-shadow.svg"/>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default OurApps;
