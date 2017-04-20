import React from "react";
import "src/styles/Screens/Technologies.css";
import {Grid} from "semantic-ui-react";
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
          <h2 className="header header--level-2">
            <div className="header--big">{"We like what we do"}</div>
            <div className="header--small">
              {"Creating applications make our adopters and us happy. \
Discover what is behind our apps"}
            </div>
          </h2>
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Grid columns={Math.floor(totalPossible / columnsAmount)}
              stackable
          >
            <Grid.Column>
              <img alt="Gear image"
                  src="src/img/technologies/gear.svg"/>
              <h3 className="header header--level-3">{"CI & CD"}</h3>
              <p className="text text--centered">
                {"We use fully automated continuous integration and continuous\
  delivery. So we can deliver any changes rapidly"}
              </p>
              <a className="tech-link"
                  href="https://github.com/Lingvokot"
                  title="Check our assets">
                {"Our assets"}
              </a>
            </Grid.Column>
            <Grid.Column>
              <img alt="React Native logo"
                  src="src/img/technologies/react-native.svg"/>
              <h3 className="header header--level-3">{"React native"}</h3>
              <p className="text">
                {"We build native iOS and Android apps with Javascript. \
Together with automation it allows us to develop smart and \
efficient way. Also hot deploy is available."}
              </p>
              <a className="tech-link"
                  href="https://facebook.github.io/react-native/"
                  title="Read about React Native">
                {"Read more"}
              </a>
            </Grid.Column>
            <Grid.Column>
              <img alt="Tech talks"
                  src="src/img/technologies/tech-talks.svg"/>
              <h3 className="header header--level-3">{"Tech Talks"}</h3>
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
