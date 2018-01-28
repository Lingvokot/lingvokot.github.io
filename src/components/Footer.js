import React from "react";
import {Grid, Segment, Menu, Image} from "semantic-ui-react";

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
            className="footer-socials"
            columns={totalIcons}
        >
          <Grid.Column id="footer-socials__github"
              textAlign="right"
          >
            <Image
                centered
                href="https://github.com/Lingvokot"
                size="mini"
                spaced={false}
                src="src/img/footer/github-ico.svg"
            />
          </Grid.Column>
          <div id="footer-socials__facebook">
            <Image
                centered
                href=""
                size="mini"
                spaced={false}
                src="src/img/footer/facebook-ico.svg"
            />
          </div>
          <Grid.Column id="footer-socials__slideshare"
              textAlign="left"
          >
            <Image
                centered
                href="http://www.slideshare.net/Lingvokot"
                size="mini"
                spaced={false}
                src="src/img/footer/slideshare-ico.svg"
            />
          </Grid.Column>
          <Grid.Column textAlign="center"
            width={totalPossible}
          >
            <p className="footer-text">
              <span>{"© 2017 LingvoKot Inc."}</span>
              <br/>
              <span>{"All rights reserved"}</span>
            </p>
          </Grid.Column>
        </Grid>
      </Menu>
    );
  }
}

export default Footer;
