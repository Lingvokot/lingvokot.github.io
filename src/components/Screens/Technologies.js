import React from "react";
import "src/styles/Screens/Technologies.css";

class Technologies extends React.Component {
  render () {
    return (
      <section className="section">
        <div className="section__content">
          <h2 className="header header--level-2">
            <span className="header--big">We like what we do<br/></span>
            <span className="header--small">
              Creating applications make our adopters and us happy.
              Discover what is behind our apps
            </span>
          </h2>
          <div className="technologies-container">
            <div className="tech">
              <div>
                <div className="gear">
                  <img src="src/img/technologies/gear.svg"/>
                </div>
                <h3 className="header header--level-3">CI & CD</h3>
                <p className="text text--centered">
                  We use fully automated<br/>
                  continuous integration and<br/>
                  continuous delivery. So we<br/>
                  can deliver any changes<br/>
                  really fast
                </p>
              </div>
              <a className="tech-link" href="">Our assets</a>
            </div>
            <div className="tech">
              <div>
                <div className="react-native">
                  <img src="src/img/technologies/react-native.svg"/>
                </div>
                <h3 className="header header--level-3">React native</h3>
                <p className="text">
                  We build native iOS and<br/>
                  Android apps with Javascript.<br/>
                  Together with automation it<br/>
                  allows to develop smart and<br/>
                  efficiently. Also hot deploy is<br/>
                  available.
                </p>
              </div>
              <a className="tech-link" href="">Read more</a>
            </div>
            <div className="tech">
              <div>
                <div className="tech-talks">
                  <img src="src/img/technologies/tech-talks.svg"/>
                </div>
                <h3 className="header header--level-3">Tech Talks</h3>
                <p className="text">
                  We use cutting edge<br/>
                  technology stack and make<br/>
                  things really simple. We are<br/>
                  always ready to share our<br/>
                  vision.
                </p>
              </div>
              <a className="tech-link" href="">Our presentations</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Technologies;
