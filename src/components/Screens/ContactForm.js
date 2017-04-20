import React from "react";
import "src/styles/Screens/ContactForm.css";
import {Grid, Form, Button, Input, Checkbox} from "semantic-ui-react";

const appURL = "https://script.google.com/macros/s/AKfycbxUnBrdST0kW8Ds3-" +
                "F8bBmZmqReU__nxeA-AACJuD-vr5w8LeA/exec";
const totalPossible = 16;

function emailIsValid(email) {
  const re = new RegExp("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w" +
                        "[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$", "i");
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
    //had to use this instead of jsonp or axios in order to avoid OPTIONS
    //requests because Google scripts cannot process them
    let xhr = new XMLHttpRequest();
    xhr.open("POST", appURL);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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
  onFieldChange(data) {
    this.setState({[data.id]: (data.id == "promotion")
                    ? data.checked : data.value});
  }
  render() {
    return (
      <Grid.Column width={totalPossible / 2}>
        <Form as="div"
            className="contact-form--container"
        >
          <div className="contact-form__input-part">
            <div className="label">{"Name"}</div>
            <Input className="field"
                id="name"
                onChange={(event, data) => this.onFieldChange(data)}
                type="text"
                value={this.state.name}/>
            <div className="label">{"Site"}</div>
            <Input className="field"
                id="site"
                onChange={(event, data) => this.onFieldChange(data)}
                type="text"
                value={this.state.site}/>
            <div className="label">{"E-mail"}</div>
            <Input className="field"
                id="email"
                onChange={(event, data) => this.onFieldChange(data)}
                type="email"
                value={this.state.email}/>
            <Checkbox checked={this.state.promotion}
                className="field"
                id="promotion"
                label={"We have expertise in the marketing or " +
                      "applications promotion"}
                onChange={(event, data) => this.onFieldChange(data)}/>
          </div>
          <div className="contact-form__submit-part">
            <Button disabled={(this.state.name.length == 0) ||
                              (this.state.email.length == 0)}
                id="submit-button"
                onClick={() => this.submitForm()}
            >
              {"Send"}
            </Button>
          </div>
        </Form>
      </Grid.Column>
    );
  }
}

export default ContactForm;