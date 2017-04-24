import React from "react";
import PropTypes from "prop-types";

class BulletControl extends React.Component {
	shouldComponentUpdate(nextProps) {
    let shouldUpdate = false;
    if ((this.props.currentSlide !== nextProps.currentSlide) ||
        (this.props.slideCount !== nextProps.slideCount))
      shouldUpdate = true;
    return shouldUpdate;
  }
  render() {
    let props = this.props;
    let slideCount = props.slideCount;
    let buttons = [];
    for (let i = 0; i < slideCount; i++) {
      let active = "";
      if (props.currentSlide === i)
        active = "active";
      buttons.push(
        <li className={"carousel-control " + active}
            key={i}
            onClick={props.goToSlide.bind(null,i)}
        />
      );
    }
    return (<ul className="carousel-controls">{buttons}</ul>);
  }
}

BulletControl.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number
}

export default BulletControl;