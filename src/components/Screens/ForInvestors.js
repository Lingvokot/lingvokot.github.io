import React from "react";

import ContactForm from "./ContactForm.js";
import "src/styles/Screens/ForInvestors.css";

class ForInvestors extends React.Component {
  render () {
    return (
      <section className="section">
        <div className="section__content section__content--container">
          <ContactForm />
          <div className="for-investors--description">
            <h2 className="header header--level-2">
              <span className="header--big">
                Great opportunities<br/>
                for your investments<br/>
              </span>
              <span className="header--small">
                Complete the form and receive our brief shortly
              </span>
            </h2>
            <p className="text">
              Inspired by minimalist art, Dots was created<br/>
              with the notion that beauty and fun are not mutually<br/>
              exclusive. Dots is a minimalist game that was de-<br/>
              signed to be a soothing experience. But dig<br/>
              deeper and there is a depth of challenging gameplay<br/>
              for more competitive players.
            </p>
            <p className="text">
              Inspired by minimalist art, Dots was created<br/>
              with the notion that beauty and fun are not mutually<br/>
              exclusive. Dots is a minimalist game that was de-<br/>
              signed to be a soothing experience. But dig<br/>
              deeper and there is a depth of challenging gameplay<br/>
              for more competitive players.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ForInvestors;
