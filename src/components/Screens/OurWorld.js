import React from "react";
import {Grid} from "semantic-ui-react";

const totalPossible = 16;
const mobileColumns = 3, tabletColumns = 4, computerColumns = 5;
const neededColumns = 2;

class OurWorld extends React.Component {
  render () {
    return (
      <Grid columns={neededColumns}
          stackable
      >
        <Grid.Column width={totalPossible / neededColumns}>
            <img alt="Planet image"
                id="planet-image"
                src="src/img/world/planet.svg"/>
        </Grid.Column>
        <Grid.Column width={totalPossible / neededColumns}>
          <Grid className="our-world-description">
            <Grid.Column width={totalPossible}>
              <h2 className="header header--level-2">
                <div className="header--big">{"Join our world"}</div>
                <div className="header--small">
                  {"With social networks updates and recources"}
                </div>
              </h2>
              <p className="text">
                {"The world is not enough. Keep your eyes open with us."}
              </p>
            </Grid.Column>
            <Grid.Column className="github"
                computer={Math.floor(totalPossible / computerColumns)}
                mobile={Math.floor(totalPossible / mobileColumns)}
                tablet={totalPossible / tabletColumns}
            >
              <a href="https://github.com/Lingvokot"
                  title="Our company on github"
              >
                <img src="src/img/world/github-ico.svg"/>
              </a>
            </Grid.Column>
            <Grid.Column className="facebook"
                computer={Math.floor(totalPossible / computerColumns)}
                mobile={Math.floor(totalPossible / mobileColumns)}
                tablet={totalPossible / tabletColumns}
            >
              <a href=""
                  title="Our company on facebook"
              >
                <img src="src/img/world/facebook-ico.svg"/>
              </a>
            </Grid.Column>
            <Grid.Column className="slideshare"
                computer={Math.floor(totalPossible / computerColumns)}
                mobile={Math.floor(totalPossible / mobileColumns)}
                tablet={totalPossible / tabletColumns}
            >
              <a href="http://www.slideshare.net/Lingvokot"
                  title="Our company on slideshare"
              >
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
