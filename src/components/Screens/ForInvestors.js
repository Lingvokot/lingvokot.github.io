import React from "react";
import ContactForm from "./ContactForm";
import {Grid, Header} from "semantic-ui-react";

const totalPossible = 16;
const columnsNeeded = 2;

class ForInvestors extends React.Component {
  render () {
    return (
      <Grid columns={columnsNeeded}
          stackable
      >
        <ContactForm />
        <Grid.Column width={totalPossible / columnsNeeded}>
          <Header as="h2"
              className="header header--level-2"
          >
            <div className="header--big">
              {"Great opportunities for your investments"}
            </div>
            <div className="header--small">
              {"Complete the form and receive our brief shortly"}
            </div>
          </Header>
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
