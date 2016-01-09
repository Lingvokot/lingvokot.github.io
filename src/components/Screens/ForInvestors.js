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
              Inspired by minimalist art, functional and domain<br/>
              driven software developing approach, we create our <br/>
              apps as a portion of beauty and fun along with <br/>
              simplicity and pleasant. So this provides great <br/>
              user experience. Despite the ease of use, we can <br/>
              always offer more advanced functionality and <br/>
              challenges for more competitive and experienced users.
            </p>
          </article>
        </section>
      </section>
    );
  }
}

export default ForInvestors;
