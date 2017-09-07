import React from "react";
import "../../styles/Screens/ContactForm.css";
import {Grid, Form, Button, Input, Checkbox} from "semantic-ui-react";

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

  handleFrameLoad() {
    if (!this.state.loading) {
      return;
    }
    this.setState({ loading: false });
    alert("Thank you for reaching out. We will get back to you soon");
  }

  submitForm(e) {
    if (!emailIsValid(this.state.email)) {
      alert("Email is invalid");
      e.preventDefault();
      return;
    }
    this.setState({ loading: true });
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
            target="no-target"
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

          <iframe
              id="no-target"
              name="no-target"
              onLoad={() => this.handleFrameLoad()}
              src="#"
              style={{ visibility: "hidden" }}
          />
        </Form>
      </Grid.Column>
    );
  }
}

export default ContactForm;
