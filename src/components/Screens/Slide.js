import React from "react";
import {Grid} from "semantic-ui-react";
import PropTypes from "prop-types";

const totalPossible = 16;
const columnsNeeded = 2;
const zero = 0;

class Slide extends React.Component {
	render() {
    let app = this.props;
    return (
      <Grid columns={columnsNeeded}
          key={app.bundleId}
          stackable
          style={{paddingBottom: 40}}
      >
        <Grid.Column width={totalPossible / columnsNeeded}>
          <img alt="screenshot"
              className="image"
              src={app.screenshotUrls[zero] || "src/img/apps/devices.svg"}
          />
        </Grid.Column>
        <Grid.Column width={totalPossible / columnsNeeded}>
          <Grid columns={columnsNeeded}>
            <Grid.Column width={totalPossible}>
              <h2 className="header header--level-2">
                <div className="header--big">{"Applications"}</div>
                <div className="header--small header--heavy">
                  {"You want to use"}
                </div>
              </h2>
              <h3 className="header header--level-3 header--green">
                {app.name}
              </h3>
              <p className="text text--green"
                  dangerouslySetInnerHTML={{__html: app.description}}
              />
            </Grid.Column>
            <Grid.Column width={totalPossible / columnsNeeded}>
              <Grid.Row>
                <Grid.Column className="above-shadow">
                  <a className="store-link"
                      href={app.url}
                      title="Get it on App Store"
                  >
                    <img alt="App Store"
                        src="src/img/apps/app-store.svg"
                    />
                  </a>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column className="shadow-container">
                  <img src="src/img/apps/app-store-button-shadow.svg"/>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={totalPossible / columnsNeeded}>
              <Grid.Row>
                <Grid.Column className="above-shadow">
                  <a className="store-link"
                      href={"https://play.google.com/store/apps/details?id=" +
                            app.bundleId}
                      title="Get it on Google Play"
                  >
                    <img alt="Google Play"
                        src="src/img/apps/google-play.svg"
                    />
                  </a>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <div className="column shadow-container">
                  <img src="src/img/apps/google-play-button-shadow.svg"/>
                </div>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    )
  }
}

Slide.propTypes = {
  bundleId: PropTypes.string,
  screenshotUrls: PropTypes.array,
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string
}

export default Slide;