import React from "react";

import ContactForm from "./ContactForm.js";
import "src/styles/Screens/ForInvestors.css";

class ForInvestors extends React.Component {
  render () {
    return (
      <section className="section">
        <section className="section__content section__content-for-investors">
          <ContactForm />
          <article className="for-investors-description">
            <h2 className="header header--level-2">
              <div className="header--big">Great opportunities</div>
              <div className="header--big">for your investments</div>
              <div className="header--small">
                Complete the form and receive our brief shortly
              </div>
            </h2>
            <p className="text">
              Inspired by minimalist art, Dots was created with<br/>
              the notion that beauty and fun are not mutually<br/>
              exclusive. Dots is a minimalist game that was de-<br/>
              signed to be a soothing experience. But dig<br/>
              deeper and there is a depth of challenging game-<br/>
              play for more competitive players.
            </p>
            <p className="text">
              Inspired by minimalist art, Dots was created with<br/>
              the notion that beauty and fun are not mutually<br/>
              exclusive. Dots is a minimalist game that was de-<br/>
              signed to be a soothing experience. But dig<br/>
              deeper and there is a depth of challenging game-<br/>
              play for more competitive players.
            </p>
          </article>
        </section>
      </section>
    );
  }
}

export default ForInvestors;
