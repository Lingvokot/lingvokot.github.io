import React from "react";
import "../../styles/Screens/Technologies.css";
import {Grid, Image, Header} from "semantic-ui-react";
const columnsAmount = 5;
const totalPossible = 16;

class Technologies extends React.Component {
  render () {
    return (
      <Grid centered
          className="technologies"
          columns={1}
          relaxed
      >
        <Grid.Column verticalAlign="middle">
          <Header as="h2"
              className="header header--level-2"
          >
            <div className="header--big">{"We like what we do"}</div>
            <div className="header--small">
              {"Creating applications make our adopters and us happy. \
Discover what is behind our apps"}
            </div>
          </Header>
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Grid columns={Math.floor(totalPossible / columnsAmount)}
              stackable
          >
            <Grid.Column>
              <Image alt="Gear image"
                  size="medium"
                  spaced
                  src="src/img/technologies/gear.svg"
              />
              <Header as="h3"
                  className="header header--level-3"
              >
                {"CI & CD"}
              </Header>
              <p className="text text--centered">
                {"We use fully automated continuous integration and continuous\
  delivery. So we can deliver any changes rapidly"}
              </p>
              <a className="tech-link"
                  href="https://github.com/Lingvokot"
                  title="Check our assets"
              >
                {"Our assets"}
              </a>
            </Grid.Column>
            <Grid.Column>
              <Image alt="React Native logo"
                  size="medium"
                  spaced
                  src="src/img/technologies/react-native.svg"
              />
              <Header as="h3"
                  className="header header--level-3"
              >
                {"React native"}
              </Header>
              <p className="text">
                {"We build native iOS and Android apps with Javascript. \
Together with automation it allows us to develop smart and \
efficient way. Also hot deploy is available."}
              </p>
              <a className="tech-link"
                  href="https://facebook.github.io/react-native/"
                  title="Read about React Native"
              >
                {"Read more"}
              </a>
            </Grid.Column>
            <Grid.Column>
              <Image alt="Tech talks"
                  size="medium"
                  spaced
                  src="src/img/technologies/tech-talks.svg"
              />
              <Header as="h3"
                  className="header header--level-3"
              >
                {"Tech Talks"}
              </Header>
              <p className="text">
                {"We use cutting edge technologies and make things simple.\
We are always ready to share our vision."}
              </p>
              <a className="tech-link"
                  href="http://www.slideshare.net/Lingvokot"
                  title="Take a look at our presentations"
              >
                {"Our presentations"}
              </a>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Technologies;
