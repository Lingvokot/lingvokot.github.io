import React from "react";

import Navigation from "./Navigation.js";
import "src/styles/Footer.css";

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <section className="footer__content">
          <section className="footer__left-part">
            <ul className="footer-socials">
              <li className="footer-socials__github">
                <a href="https://github.com/Lingvokot">
                  <img src="src/img/footer/github-ico.svg"/>
                </a>
              </li>
              <li className="footer-socials__facebook">
                <a href=""><img src="src/img/footer/facebook-ico.svg"/></a>
              </li>
              <li className="footer-socials__slideshare">
                <a href="http://www.slideshare.net/Lingvokot">
                  <img src="src/img/footer/slideshare-ico.svg"/>
                </a>
              </li>
            </ul>
            <section>
              <p className="footer-text">
                © 2015 LingvoKot inc.<br/>
                All rights reserved
              </p>
            </section>
          </section>
          <section>
            <Navigation classes="navigation__page-scroller--black" />
          </section>
        </section>
      </footer>
    );
  }
}

export default Footer;
