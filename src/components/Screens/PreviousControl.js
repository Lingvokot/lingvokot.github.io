import React from "react";

class PreviousControl extends React.Component {
  render() {
    return (
      <button onClick={this.props.previousSlide}>
        <img src="src/img/apps/previous.svg"/>
      </button>
    )
  }
}

export default PreviousControl;