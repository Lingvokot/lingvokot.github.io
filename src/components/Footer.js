import React from "react";

import "src/styles/Footer.css";

class Footer extends React.Component {
  render () {
    return (
      <div className="ui bottom menu footer">
        <div className="ui one column center aligned grid footer-socials">
          <div className="column">
            <div className="ui five column grid footer-socials">
              <div className="column"></div>
              <div className="column" id="footer-socials__github">
                <a href="https://github.com/Lingvokot">
                  <img src="src/img/footer/github-ico.svg"/>
                </a>
              </div>
              <div className="column" id="footer-socials__facebook">
                <a href=""><img src="src/img/footer/facebook-ico.svg"/></a>
              </div>
              <div className="column" id="footer-socials__slideshare">
                <a href="http://www.slideshare.net/Lingvokot">
                  <img src="src/img/footer/slideshare-ico.svg"/>
                </a>
              </div>
              <div className="column"></div>
              <div className="sixteen wide column">
                <p className="footer-text">
                  © 2017 LingvoKot inc.<br/>
                  All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
