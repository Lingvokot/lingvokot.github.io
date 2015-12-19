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
            <div>
              <input id="promotion" type="checkbox" name="_promotion" value="promotion"/>
               <label htmlFor="promotion" className="checkbox-label">
                 We have expertise in the marketingor applications promotion
              </label>
            </div>
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
