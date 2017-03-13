import React from "react";
import serialize from "form-serialize";
import jsonp from "jsonp";

import "src/styles/Screens/ContactForm.css";

class Screens extends React.Component {

  componentDidMount () {
    this.refs.form.addEventListener("submit", (e) => this.formSubmitHandler(e), false);
  }

  formSubmitHandler (e) {
    e.preventDefault();

    const form = e.target;

    let url = form.action.replace('/post', '/post-json');

    url = url + '?' + serialize(form) + '&c=clb';

    const timeout = 1e3 * 5;

    jsonp(url, {timeout, name: "clb"}, (err, data) => {
      if (err) {
        alert("ERROR\n\tThere was an error submiting your form: \n\t" + err);
      } else {
        this.handleFormSuccess(data);
      }
    });

  }

  handleFormSuccess (data) {
    // MailChimp sends HTML...
    // if there is a link provided in message,
    //  we consider that it's a profile link
    let someElem = document.createElement("div");
    someElem.innerHTML = data.msg;

    let profileLink = someElem.querySelector("a");

    let msg = "Thank you for reaching out. We will get back to you soon";

    if (profileLink) {

      msg += `\nDid you want to go to your MailChimp account page?`;

      if (global.confirm(msg)) {
        location.go(profileLink.href);
      }
    } else {
      alert(msg);
    }

  }

  render () {
    return (
      <div className="column">
        <form action="http://lingvokot.us12.list-manage.com/subscribe/post"
          method="POST" ref="form" className="ui form contact-form--container">
          <input type="hidden" name="u" value="4ee96ad6ec49116c3de5ed5b5" />
          <input type="hidden" name="id" value="0ff14c223a" />
          <input type="hidden" name="b_4ee96ad6ec49116c3de5ed5b5_0ff14c223a" tabIndex="-1" value="" />
          <div className="contact-form__input-part">
          <div className="field">
            <label htmlFor="name" className="label">Name</label>
            <input id="name" className="input-form" type="text" name="MERGE1" size="25" />
          </div>
          <div className="field">
            <label htmlFor="site" className="label">Site</label>
            <input id="site" className="input-form" type="text" name="MERGE2" size="25" />
          </div>
          <div className="field">
            <label htmlFor="email" className="label">E-mail</label>
            <input id="email" className="input-form" type="email" autoCapitalize="off"
              autoCorrect="off" name="MERGE0" size="25" />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input id="promotion" type="checkbox" className="hidden" tabIndex="0" name="group[2105][1]" />
              <label htmlFor="promotion" className="checkbox-label">
                We have expertise in the marketing or applications promotion
              </label>
            </div>
          </div>
          </div>
          <div className="contact-form__submit-part">
            <button className="ui button submit-button" type="submit" name="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Screens;
