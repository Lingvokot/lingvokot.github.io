import React from "react";
import "src/styles/Screens/ContactForm.css";

const appURL = "https://script.google.com/macros/s/AKfycbxUnBrdST0kW8Ds3-F8bBmZmqReU__nxeA-AACJuD-vr5w8LeA/exec";

function emailIsValid(email) {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      site: "",
      email: "",
      promotion: false
    };
  }
  submitForm() {
    if (!emailIsValid(this.state.email)) {
      alert("Email is invalid");
      return;
    }
    //had to use this instead of jsonp or axios in order to avoid OPTIONS requests
    //because Google scripts cannot process them
    let xhr = new XMLHttpRequest();
    xhr.open('POST', appURL);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
      alert("Thank you for reaching out. We will get back to you soon");
      return;
    };
    try {
      xhr.send(JSON.stringify(this.state));
    }
    catch (err) {
      alert("Oops! Some error occurred.\nDetails: " + err);
    }
  }
  onFieldChange(event) {
    this.setState({[event.target.id]: (event.target.id == "promotion") ? event.target.checked : event.target.value});
  }
  render() {
    return (
      <div className="column">
        <div className="ui form contact-form--container">
          <div className="contact-form__input-part">
            <div className="field">
              <label htmlFor="name" className="label">Name</label>
              <input id="name" className="input-form" type="text" name="MERGE1" size="25"
                    onChange={(e) => this.onFieldChange(e)} value={this.state.name}/>
            </div>
            <div className="field">
              <label htmlFor="site" className="label">Site</label>
              <input id="site" className="input-form" type="text" name="MERGE2" size="25"
                    onChange={(e) => this.onFieldChange(e)} value={this.state.site}/>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">E-mail</label>
              <input id="email" className="input-form" type="email" autoCapitalize="off"
                    onChange={(e) => this.onFieldChange(e)} value={this.state.email}
                    autoCorrect="off" name="MERGE0" size="25" />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input id="promotion" type="checkbox" className="hidden" tabIndex="0"
                    name="group[2105][1]" checked={this.state.promotion}
                    onChange={(e) => this.onFieldChange(e)}/>
              <label htmlFor="promotion" className="checkbox-label">
                We have expertise in the marketing or applications promotion
              </label>
            </div>
          </div>
          </div>
          <div className="contact-form__submit-part">
            <button className="ui button" id="submit-button" onClick={() => this.submitForm}
                    disabled={(this.state.name.length == 0) || (this.state.email.length == 0)}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;