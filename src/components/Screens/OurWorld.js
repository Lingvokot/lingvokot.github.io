import React from "react";

class OurWorld extends React.Component {
  render () {
    return (
      <div className="ui two column stackable grid">
        <div className="column">
            <img id="planet-image" alt="Planet image" src="src/img/world/planet.svg"/>
        </div>
        <div className="column">
          <div className="ui grid our-world-description">
            <div className="sixteen wide column">
              <h2 className="header header--level-2">
                <div className="header--big">Join our world</div>
                <div className="header--small">
                  With social networks updates and recources
                </div>
              </h2>
              <p className="text">
                The world is not enough. Keep your eyes open with us.
              </p>
            </div>
            <div className="five wide mobile four wide tablet three wide computer column github">
              <a title="Our company on github" href="https://github.com/Lingvokot">
                <img src="src/img/world/github-ico.svg"/>
              </a>
            </div>
            <div className="five wide mobile four wide tablet three wide computer column facebook">
              <a title="Our company on facebook" href="">
                <img src="src/img/world/facebook-ico.svg"/>
              </a>
            </div>
            <div className="five wide mobile four wide tablet three wide computer column slideshare">
              <a title="Our company on slideshare" href="http://www.slideshare.net/Lingvokot">
                <img src="src/img/world/slideshare-ico.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurWorld;
