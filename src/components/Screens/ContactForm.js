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

    let msg = "Success!\n\nYou have registered in our form";

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
      <form action="http://lingvokot.us12.list-manage.com/subscribe/post" method="POST" ref="form">

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
