import React from "react";
import "src/styles/Screens/Technologies.css";

class Technologies extends React.Component {
  render () {
    return (
      <div className="ui doubling three column grid technologies">
        <div className="row"><div>
          <h2 className="header header--level-2">
            <div className="header--big">We like what we do</div>
            <div className="header--small">
              Creating applications make our adopters and us happy.
              Discover what is behind our apps
            </div>
          </h2>
        </div></div>
        <div className="row">
        <div className="four wide column">
            <img alt="Gear image" src="src/img/technologies/gear.svg"/>
        </div>
        <div className="eight wide column">
          <article>
            <h3 className="header header--level-3">CI & CD</h3>
            <p className="text text--centered">
              We use fully automated continuous integration and continuous 
              delivery. So we can deliver any changes rapidly
            </p>
          </article>
        </div>
        <div className="four wide column">
          <a className="tech-link" href="https://github.com/Lingvokot" title="Check our assets">
            Our assets
          </a>
        </div>
        </div>
        <div className="row">
        <div className="four wide column">
            <img alt="React Native logo" src="src/img/technologies/react-native.svg"/>
        </div>
        <div className="eight wide column">
          <article>
            <h3 className="header header--level-3">React native</h3>
            <p className="text">
              We build native iOS and Android apps with Javascript.
              Together with automation it allows us to develop smart and
              efficient way. Also hot deploy is available.
            </p>
          </article>
        </div>
        <div className="four wide column">
          <a title="Read about React Native" className="tech-link"
            href="https://facebook.github.io/react-native/">
            Read more
          </a>
        </div>
        </div>
        <div className="row">
        <div className="four wide column">
            <img alt="Tech talks" src="src/img/technologies/tech-talks.svg"/>
        </div>
        <div className="eight wide column">
          <article>
            <h3 className="header header--level-3">Tech Talks</h3>
            <p className="text">
              We use cutting edge technologies and make things simple.
              We are always ready to share our vision.
            </p>
          </article>
        </div>
        <div className="four wide column">
          <a className="tech-link" href="http://www.slideshare.net/Lingvokot"
            title="Take a look at our presentations">
            Our presentations
          </a> 
        </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
