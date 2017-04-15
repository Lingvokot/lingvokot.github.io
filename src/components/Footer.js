import React from "react";
import {Grid, Sidebar, Segment, Menu} from "semantic-ui-react";

import "src/styles/Footer.css";

class Footer extends React.Component {
  render () {
    return (
      <Menu as={Segment} animation='push' direction='bottom' visible id="footer">
        <Grid centered columns={1} className=" footer-socials">
          <Grid.Column verticalAlign="middle">
            <Grid columns={5} className="footer-socials">
              <Grid.Column />
              <Grid.Column id="footer-socials__github">
                <a href="https://github.com/Lingvokot">
                  <img src="src/img/footer/github-ico.svg"/>
                </a>
              </Grid.Column>
              <Grid.Column id="footer-socials__facebook">
                <a href=""><img src="src/img/footer/facebook-ico.svg"/></a>
              </Grid.Column>
              <Grid.Column id="footer-socials__slideshare">
                <a href="http://www.slideshare.net/Lingvokot">
                  <img src="src/img/footer/slideshare-ico.svg"/>
                </a>
              </Grid.Column>
              <Grid.Column />
              <Grid.Column width={16}>
                <p className="footer-text">
                  © 2017 LingvoKot inc.<br/>
                  All rights reserved
                </p>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Menu>
    );
  }
}

export default Footer;
