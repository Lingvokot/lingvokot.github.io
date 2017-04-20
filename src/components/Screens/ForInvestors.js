import React from "react";
import ContactForm from "./ContactForm.js";
import {Grid, } from "semantic-ui-react";
import "src/styles/Screens/ForInvestors.css";

const totalPossible = 16;

class ForInvestors extends React.Component {
  render () {
    return (
      <Grid className="section__content section__content-for-investors"
          columns={2}
      >
        <ContactForm />
        <Grid.Column width={totalPossible / 2}>
          <h2 className="header header--level-2">
            <div className="header--big">
              {"Great opportunities for your investments"}
            </div>
            <div className="header--small">
              {"Complete the form and receive our brief shortly"}
            </div>
          </h2>
          <p className="text">
            {"Inspired by minimalist art, functional and domain \
driven software developing approach, we create our \
apps as a portion of beauty and fun along with \
simplicity and pleasant. So this provides great \
user experience. Despite the ease of use, we can \
always offer more advanced functionality and \
challenges for more competitive and experienced users."}
          </p>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ForInvestors;
