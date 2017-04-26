import React from "react";
import "../../styles/Screens/ContactForm.css";
import {Grid, Form, Button, Input, Checkbox} from "semantic-ui-react";

const appURL = "https://script.google.com/macros/s/AKfycbxUnBrdST0kW8Ds3-" +
                "F8bBmZmqReU__nxeA-AACJuD-vr5w8LeA/exec";
const totalPossible = 16;
const columnsNeeded = 2;

function emailIsValid(email) {
  const re = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))/.source +
    "@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\" +
    "-0-9]+\\.)+[a-zA-Z]{2,}))$"
  );
  return re.test(email);
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      loading: false,
      name: "",
      promotion: false,
      site: "",
    };
  }

  submitForm(e) {
    e.preventDefault();

    if (!emailIsValid(this.state.email)) {
      alert("Email is invalid");
      return;
    }
    this.setState({ loading: true });
    //had to use this instead of jsonp or axios in order to avoid OPTIONS
    //requests because Google scripts cannot process them
    let xhr = new XMLHttpRequest();
    xhr.open("POST", appURL);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = () => {
      alert("Thank you for reaching out. We will get back to you soon");
      this.setState({
        email: "",
        loading: false,
        name: "",
        promotion: false,
        site: "",
      });
      return;
    };
    try {
      xhr.send(JSON.stringify(this.state));
    }
    catch (err) {
      this.setState({ loading: false });
      alert("Oops! Some error occurred.\nDetails: " + err);
    }
  }
  onFieldChange(data) {
    this.setState({[data.id]: (data.id == "promotion")
                    ? data.checked : data.value});
  }
  render() {
    return (
      <Grid.Column width={totalPossible / columnsNeeded}>
        <Form
            action="https://docs.google.com/forms/d/e/1FAIpQLScv88X27c7q1uOVqyiX8JUb6CzjEuQg4GjzPZJpFdMyClxq4A/formResponse" // eslint-disable-line
            as="form"
            className="contact-form--container"
            loading={this.state.loading}
            onSubmit={(e) => this.submitForm(e)}
        >
          <div className="contact-form__input-part">
            <div className="label">{"Name"}</div>
            <Input
                className="field"
                id="name"
                name="entry.799353464"
                onChange={(event, data) => this.onFieldChange(data)}
                type="text"
                value={this.state.name}
            />
            <div className="label">{"Site"}</div>
            <Input
                className="field"
                id="site"
                name="entry.467602186"
                onChange={(event, data) => this.onFieldChange(data)}
                type="text"
                value={this.state.site}
            />
            <div className="label">{"E-mail"}</div>
            <Input
                className="field"
                id="email"
                name="entry.1781812128"
                onChange={(event, data) => this.onFieldChange(data)}
                type="email"
                value={this.state.email}
            />
            <Checkbox checked={this.state.promotion}
                className="field"
                id="promotion"
                label={"We have expertise in the marketing or " +
                      "applications promotion"}
                name="entry.1960241228"
                onChange={(event, data) => this.onFieldChange(data)}
            />
          </div>
          <div className="contact-form__submit-part">
            <Button disabled={(this.state.name == "") ||
                              (this.state.email == "")}
                id="submit-button"
            >
              {"Send"}
            </Button>
          </div>

          <Input
              name="fvv"
              type="hidden"
              value="1"
          />
          <Input
              name="draftResponse"
              type="hidden"
              value="[null,null,&quot;5246452325233904698&quot;]"
          />
          <Input
              name="pageHistory"
              type="hidden"
              value="0"
          />
          <Input
              name="fbzx"
              type="hidden"
              value="5246452325233904698"
          />
        </Form>
      </Grid.Column>
    );
  }
}

export default ContactForm;
