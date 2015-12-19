import React from "react";
import "src/styles/Screens/OurWorld.css";

class OurWorld extends React.Component {
  render () {
    return (
      <section className="section">
        <div className="section__content section__content--container">
          <div className="planet">
            <img src="src/img/world/planet.svg"/>
          </div>
        <div className="our-world--container">
          <div>
            <h2 className="header header--level-2">
              <span className="header--big">Join our world<br/></span>
              <span className="header--small">
                With social networks updates and recources
              </span>
            </h2>
            <p className="text">
              Questions have been raised about the social<br/>
              impact of widespread use of social networking<br/>
              sites
            </p>
          </div>
          <div className="socials">
            <div className="github">
              <a href="https://github.com/Lingvokot">
                <img src="src/img/world/github-ico.svg"/>
              </a>
            </div>
            <div className="facebook">
              <a href=""><img src="src/img/world/facebook-ico.svg"/></a>
            </div>
            <div className="slideshare">
              <a href=""><img src="src/img/world/slideshare-ico.svg"/></a>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  }
}

export default OurWorld;
