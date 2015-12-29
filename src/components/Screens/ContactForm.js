import React from "react";

import "src/styles/Screens/ContactForm.css";

class Screens extends React.Component {
  render () {
    return (
      <form action="http://lingvokot.us12.list-manage.com/subscribe/post" method="POST">

        <input type="hidden" name="u" value="4ee96ad6ec49116c3de5ed5b5" />
        <input type="hidden" name="id" value="0ff14c223a" />
        <input type="hidden" name="b_4ee96ad6ec49116c3de5ed5b5_0ff14c223a" tabIndex="-1" value="" />

        <section className="contact-form--container">
          <section className="contact-form__input-part">
            <label htmlFor="name" className="label">Name</label>
            <input id="name" className="input-form" type="text" name="MERGE1" size="25" />
            <label htmlFor="site" className="label">Site</label>
            <input id="site" className="input-form" type="text" name="MERGE2" size="25" />
            <label htmlFor="email" className="label">E-mail</label>
            <input id="email" className="input-form" type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" size="25" />
            <label htmlFor="promotion" className="checkbox">
              <input id="promotion" type="checkbox" name="group[2105][1]" />
              <span className="checkbox-img"></span>
              <span className="checkbox-label">
                We have expertise in the marketing<br/>
                or applications promotion
              </span>
            </label>
          </section>
          <section className="contact-form__submit-part">
            <input type="submit" className="submit-button" name="submit" value="Send"/>
          </section>
        </section>
      </form>
    );
  }
}

export default Screens;
