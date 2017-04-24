import React from "react";
import PropTypes from "prop-types";

class PreviousControl extends React.Component {
  render() {
    return (
      <button onClick={this.props.previousSlide}>
        <img src="src/img/apps/previous.svg"/>
      </button>
    )
  }
}

PreviousControl.propTypes = {
	previousSlide: PropTypes.func
}

export default PreviousControl;