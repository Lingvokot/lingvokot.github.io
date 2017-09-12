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
              style={{height: "75%"}}
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
                {
                  app.iOSURL ? (
                    <a className="store-link"
                        href={app.iOSURL}
                        title="Get it on App Store"
                    >
                      <img alt="App Store"
                          src="src/img/apps/app-store.svg"
                      />
                    </a>
                  ) : (
                    <p className="text text--green"
                        style={{textAlign: "center"}}
                    >
                      Not available on App Store for now
                    </p>
                  )
                }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column className="shadow-container">
                {
                  app.iOSURL && (
                    <img src="src/img/apps/app-store-button-shadow.svg"/>
                  )
                }
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={totalPossible / columnsNeeded}>
              <Grid.Row>
                <Grid.Column className="above-shadow">
                {
                  app.androidURL ? (
                    <a className="store-link"
                        href={app.androidURL}
                        title="Get it on Google Play"
                    >
                      <img alt="Google Play"
                          src="src/img/apps/google-play.svg"
                      />
                    </a>
                  ) : (
                    <p className="text text--green"
                        style={{textAlign: "center"}}
                    >
                      Not available on Google Play for now
                    </p>
                  )
                }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              {
                app.androidURL && (
                  <div className="column shadow-container">
                    <img src="src/img/apps/google-play-button-shadow.svg"/>
                  </div>
                )
              }
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
