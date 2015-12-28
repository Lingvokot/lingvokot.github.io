import React from "react";
import {Link} from "react-scroll";

import "src/styles/Navigation.css";

class Navigation extends React.Component {
  render () {
    let className = "navigation__page-scroller " + this.props.classes;
    let linkProps = {
      duration: 200,
      spy: true,
      smooth: true,
      onSetActive: (to) => {
        let navlist = document.querySelectorAll(".navigation .active");
        for(let i = 0; i < navlist.length; i++) {
          navlist[i].className = navlist[i].className.slice(0, -7);
        }
        navlist = document.querySelectorAll(".navigation ." + to);
        for(let i = 0; i < navlist.length; i++) {
          navlist[i].className += " active";
        }
      }
    };
    return (
        <ul className="navigation">
          <li className={className}>
            <Link className="Applications" to="Applications" {...linkProps}>
              Applications
            </Link>
          </li>
          <li className={className}>
            <Link className="Technologies" to="Technologies" {...linkProps}>
              Technologies
            </Link>
          </li>
          <li className={className}>
            <Link className="Socials" to="Socials" {...linkProps}>
              Socials
            </Link>
          </li>
          <li className={className}>
            <Link className="Investors" to="Investors" {...linkProps}>
              For investors
            </Link>
          </li>
        </ul>
    );
  }
}

Navigation.propTypes = {
  classes: React.PropTypes.string
}

export default Navigation;
