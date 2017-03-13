import React from "react";

import "src/styles/Footer.css";

class Footer extends React.Component {
  render () {
    return (
      <div className="ui bottom menu footer">
        <div className="ui three column grid footer-socials">
          <div className="column footer-socials__github">
            <a href="https://github.com/Lingvokot">
              <img src="src/img/footer/github-ico.svg"/>
            </a>
          </div>
          <div className="column footer-socials__facebook">
            <a href=""><img src="src/img/footer/facebook-ico.svg"/></a>
          </div>
          <div className="column footer-socials__slideshare">
            <a href="http://www.slideshare.net/Lingvokot">
              <img src="src/img/footer/slideshare-ico.svg"/>
            </a>
          </div>
          <div className="sixteen wide column">
            <p className="footer-text">
              © 2015 LingvoKot inc.<br/>
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
