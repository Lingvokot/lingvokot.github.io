import React from "react";
import {Grid} from "semantic-ui-react";

class OurWorld extends React.Component {
  render () {
    return (
      <Grid column={2} stackable>
        <Grid.Column width={8}>
            <img id="planet-image" alt="Planet image" src="src/img/world/planet.svg"/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid className="our-world-description">
            <Grid.Column width={16}>
              <h2 className="header header--level-2">
                <div className="header--big">Join our world</div>
                <div className="header--small">
                  With social networks updates and recources
                </div>
              </h2>
              <p className="text">
                The world is not enough. Keep your eyes open with us.
              </p>
            </Grid.Column>
            <Grid.Column mobile={5} tablet={4} computer={3} className="github">
              <a title="Our company on github" href="https://github.com/Lingvokot">
                <img src="src/img/world/github-ico.svg"/>
              </a>
            </Grid.Column>
            <Grid.Column mobile={5} tablet={4} computer={3} className="facebook">
              <a title="Our company on facebook" href="">
                <img src="src/img/world/facebook-ico.svg"/>
              </a>
            </Grid.Column>
            <Grid.Column mobile={5} tablet={4} computer={3} className="slideshare">
              <a title="Our company on slideshare" href="http://www.slideshare.net/Lingvokot">
                <img src="src/img/world/slideshare-ico.svg"/>
              </a>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}

export default OurWorld;
