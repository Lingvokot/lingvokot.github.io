import React from "react";
import {Grid, Segment, Menu} from "semantic-ui-react";

import "../styles/Footer.css";
const totalPossible = 16;
//Oh my God, this eslint is sometimes a true paranoid!
const totalIcons = 3;

class Footer extends React.Component {
  render () {
    return (
      <Menu as={Segment}
          direction="bottom"
          id="footer"
      >
        <Grid centered
            className=" footer-socials"
            columns={1}
        >
          <Grid.Column verticalAlign="middle">
            <Grid className="footer-socials"
                columns={Math.floor(totalPossible / totalIcons)}
            >
              <Grid.Column/>
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
              <Grid.Column/>
              <Grid.Column width={totalPossible}>
                <p className="footer-text">
                  <span>{"© 2017 LingvoKot Inc."}</span>
                  <br/>
                  <span>{"All rights reserved"}</span>
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
