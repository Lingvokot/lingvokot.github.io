import React from "react";

import "src/styles/Screens/ContactForm.css";

class Screens extends React.Component {
  render () {
    return (
      <form>
        <div className="contact-form--container">
          <div className="contact-form__input-part">
            <label htmlFor="name" className="label">Name</label>
            <input id="name" className="input-form" type="text"/>
            <label htmlFor="site" className="label">Site</label>
            <input id="site" className="input-form" type="text"/>
            <label htmlFor="email" className="label">E-mail</label>
            <input id="email" className="input-form" type="text"/>
            <label htmlFor="promotion" className="checkbox">
              <input id="promotion" type="checkbox" name="_promotion"
                  value="promotion"
              />
              <span className="checkbox-img"></span>
              <span className="checkbox-label">
                We have expertise in the marketing<br/>
                or applications promotion
              </span>
            </label>
          </div>
          <div className="contact-form__submit-part">
            <input type="submit" className="submit-button" value="Send"/>
          </div>
        </div>
      </form>
    );
  }
}

export default Screens;
