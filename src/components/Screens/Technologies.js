import React from "react";
import "src/styles/Screens/Technologies.css";

class Technologies extends React.Component {
  render () {
    return (
      <section className="section">
        <section className="section__content section__content--technologies">
          <h2 className="header header--level-2">
            <div className="header--big">We like what we do<br/></div>
            <div className="header--small">
              Creating applications make our adopters and us happy.
              Discover what is behind our apps
            </div>
          </h2>
          <section className="technologies-container">
            <section className="tech">
              <section>
                <figure className="gear">
                  <img alt="Gear image" src="src/img/technologies/gear.svg"/>
                </figure>
                <article className="tech__description">
                  <h3 className="header header--level-3">CI & CD</h3>
                  <p className="text text--centered">
                    We use fully automated<br/>
                    continuous integration and<br/>
                    continuous delivery. So we<br/>
                    can deliver any changes<br/>
                    rapidly
                  </p>
                </article>
              </section>
              <a title="Check our assets" className="tech-link" href="">Our assets</a>
            </section>
            <section className="tech">
              <section>
                <figure className="react-native">
                  <img alt="React Native logo" src="src/img/technologies/react-native.svg"/>
                </figure>
                <article className="tech__description">
                  <h3 className="header header--level-3">React native</h3>
                  <p className="text">
                    We build native iOS and<br/>
                    Android apps with Javascript.<br/>
                    Together with automation it<br/>
                    allows us to develop smart and<br/>
                    efficient way. Also hot deploy is<br/>
                    available.
                  </p>
                </article>
              </section>
              <a title="Read about React Native" className="tech-link" href="">Read more</a>
            </section>
            <section className="tech">
              <section>
                <figure className="tech-talks">
                  <img alt="Tech talks" src="src/img/technologies/tech-talks.svg"/>
                </figure>
                <article className="tech__description">
                  <h3 className="header header--level-3">Tech Talks</h3>
                  <p className="text">
                    We use cutting edge<br/>
                    technologies and make<br/>
                    things simple. We are<br/>
                    always ready to share our<br/>
                    vision.
                  </p>
                </article>
              </section>
              <a title="Take a look at our presentations" className="tech-link" href="">Our presentations</a>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Technologies;
