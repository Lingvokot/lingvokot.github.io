import React from "react";
import PropTypes from "prop-types";

class NextControl extends React.Component {
	render() {
    return (
      <button onClick={this.props.nextSlide}>
        <img src="src/img/apps/next.svg"/>
      </button>
    )
  }
}

NextControl.propTypes = {
	nextSlide: PropTypes.func
}

export default NextControl;