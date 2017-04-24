import React from "react";
import {Link} from "react-scroll";
import "../styles/Navbar.css";
import {Grid} from "semantic-ui-react";

const totalPossible = 16;
const computerColumns = 5, tabletColumns = 4, mobileColumns = 2;

export default class MenuLink extends React.Component {
	render() {
		return (
      <Grid.Column className={"navigation__page-scroller " +
                              "navigation__page-scroller--green"}
          computer={Math.floor(totalPossible / computerColumns)}
          mobile={totalPossible / mobileColumns}
          tablet={totalPossible / tabletColumns}
      >
        <Link className={this.props.name +
                        (this.props.isActive ? " true-active": "")}
            to={this.props.name}
            {...this.props.linkProps}
        >
          {this.props.text}
        </Link>
      </Grid.Column>
    );
	}
}