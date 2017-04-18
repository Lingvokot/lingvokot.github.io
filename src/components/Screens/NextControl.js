import React from "react";

class NextControl extends React.Component {
	render() {
    return (
      <button onClick={this.props.nextSlide}>
        <img src="src/img/apps/next.svg"/>
      </button>
    )
  }
}

export default NextControl;