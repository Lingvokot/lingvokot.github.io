import React from "react";
import {Grid, Header, Image} from "semantic-ui-react";

import "../../styles/Screens/OurWorld.css";
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
          <Image alt="Planet image"
              id="planet-image"
              src="src/img/world/planet.svg"
          />
        </Grid.Column>
        <Grid.Column width={totalPossible / neededColumns}>
          <Grid className="our-world-description">
            <Grid.Column width={totalPossible}>
              <Header as="h2"
                  className="header header--level-2"
              >
                <div className="header--big">{"Join our world"}</div>
                <div className="header--small">
                  {"With social networks updates and recources"}
                </div>
              </Header>
              <p className="text">
                {"The world is not enough. Keep your eyes open with us."}
              </p>
            </Grid.Column>
            <Grid.Column computer={Math.floor(totalPossible / computerColumns)}
                mobile={Math.floor(totalPossible / mobileColumns)}
                tablet={totalPossible / tabletColumns}
            >
              <Image alt="Github"
                  href="https://github.com/Lingvokot"
                  size="medium"
                  spaced={false}
                  src="src/img/world/github-ico.svg"
                  title="Our company on github"
              />
            </Grid.Column>
            <Grid.Column computer={Math.floor(totalPossible / computerColumns)}
                mobile={Math.floor(totalPossible / mobileColumns)}
                tablet={totalPossible / tabletColumns}
            >
              <Image alt="Facebook"
                  href=""
                  size="medium"
                  spaced={false}
                  src="src/img/world/facebook-ico.svg"
                  title="Our company on facebook"
              />
            </Grid.Column>
            <Grid.Column computer={Math.floor(totalPossible / computerColumns)}
                mobile={Math.floor(totalPossible / mobileColumns)}
                tablet={totalPossible / tabletColumns}
            >
              <Image alt="Slideshare"
                  href="http://www.slideshare.net/Lingvokot"
                  size="medium"
                  spaced={false}
                  src="src/img/world/slideshare-ico.svg"
                  title="Our company on slideshare"
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}

export default OurWorld;
