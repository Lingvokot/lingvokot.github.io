import React from "react";
import "src/styles/Screens/OurWorld.css";

class OurWorld extends React.Component {
  render () {
    return (
      <section className="section">
        <section className="section__content section__content--our-world">
          <figure className="planet">
            <img alt="Planet image" src="src/img/world/planet.svg"/>
          </figure>
        <section className="our-world-description">
          <article>
            <h2 className="header header--level-2">
              <div className="header--big">Join our world<br/></div>
              <div className="header--small">
                With social networks updates and recources
              </div>
            </h2>
            <p className="text">
              Questions have been raised about the social<br/>
              impact of widespread use of social networking<br/>
              sites
            </p>
          </article>
          <ul className="socials">
            <li className="github">
              <a title="Our company on github" href="https://github.com/Lingvokot">
                <img src="src/img/world/github-ico.svg"/>
              </a>
            </li>
            <li className="facebook">
              <a title="Our company on facebook" href="">
                <img src="src/img/world/facebook-ico.svg"/>
              </a>
            </li>
            <li className="slideshare">
              <a title="Our company on slideshare" href="http://www.slideshare.net/Lingvokot">
                <img src="src/img/world/slideshare-ico.svg"/>
              </a>
            </li>
          </ul>
        </section>
        </section>
      </section>
    );
  }
}

export default OurWorld;
