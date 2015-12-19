import React from "react";

import Navigation from "./Navigation.js";
import "src/styles/Footer.css";

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div>
            <div className="footer-socials">
              <div className="footer-socials__github">
                <a href="https://github.com/Lingvokot">
                  <img src="src/img/footer/github-ico.svg"/>
                </a>
              </div>
              <div className="footer-socials__facebook">
                <a href=""><img src="src/img/footer/facebook-ico.svg"/></a>
              </div>
              <div className="footer-socials__slideshare">
                <a href=""><img src="src/img/footer/slideshare-ico.svg"/></a>
              </div>
            </div>
            <div>
              <p className="footer-text">
                © 2015 LingvoKot inc.<br/>
                All rights reserved
              </p>
            </div>
          </div>
          <div>
            <Navigation classes="navigation__page-scroller--black" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
