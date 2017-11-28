import React from "react";
import {Link} from "react-scroll";
import "../styles/Navbar.css";
import {Grid} from "semantic-ui-react";
import PropTypes from "prop-types";

const totalPossible = 16;
const computerColumns = 5, tabletColumns = 4, mobileColumns = 2;
const basicLinkProps = {
  duration: 200,
  spy: true,
  smooth: true
};

class MenuLink extends React.Component {
	render() {
		return (
      <Grid.Column className={"navigation__page-scroller " +
                              "navigation__page-scroller--green"}
          computer={Math.floor(totalPossible / computerColumns)}
          mobile={totalPossible / mobileColumns}
          tablet={totalPossible / tabletColumns}
      >
        <Link className={String(this.props.name) +
                        (this.props.isActive ? " true-active": "")}
            to={this.props.name}
            {...basicLinkProps}
            offset={this.props.offset}
        >
          {this.props.text}
        </Link>
      </Grid.Column>
    );
	}
}

MenuLink.propTypes = {
  isActive: PropTypes.bool,
  offset: PropTypes.number,
  name: PropTypes.string,
  text: PropTypes.string
}

export default MenuLink;
