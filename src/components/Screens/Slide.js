import React from "react";
import {Grid, Image, Header} from "semantic-ui-react";
import PropTypes from "prop-types";

const totalPossible = 16;
const columnsNeeded = 2;
const zero = 0;

class Slide extends React.Component {
  render() {
    let app = this.props;
    return (
      <Grid
          className="slide-grid"
          columns={columnsNeeded}
          key={app.bundleId}
          stackable
      >
        <Grid.Column
            className="screenshot-image-wrapper"
            verticalAlign="middle"
            width={totalPossible / columnsNeeded}
        >
          <Image alt="screenshot"
              centered
              size="medium"
              src={app.screenshotUrls[zero] || "src/img/apps/devices.svg"}
          />
        </Grid.Column>
        <Grid.Column width={totalPossible / columnsNeeded}>
          <Grid columns={columnsNeeded}>
            <Grid.Column width={totalPossible}>
              <Header as="h2"
                  className="header header--level-2"
              >
                <div className="header--big">{"Applications"}</div>
                <div className="header--small header--heavy">
                  {"You want to use"}
                </div>
              </Header>
              <Header as="h3"
                  className="header header--level-3 header--green"
              >
                {app.name}
              </Header>
              <p className="text text--green"
                  dangerouslySetInnerHTML={{__html: app.description}}
              />
            </Grid.Column>
            <Grid.Column width={totalPossible / columnsNeeded}>
              <Grid.Row>
                <Grid.Column className="above-shadow">
                {
                  app.iOSURL ? (
                    <Image alt="App Store"
                        className="store-link"
                        href={app.iOSURL}
                        onClick={() => window.open(app.iOSURL, "_blank")}
                        size="medium"
                        spaced={false}
                        src="src/img/apps/app-store.svg"
                        title="Get it on App Store"
                    />
                  ) : (
                    <p className="text"
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
                    <Image size="medium"
                        spaced={false}
                        src="src/img/apps/app-store-button-shadow.svg"
                    />
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
                    <Image alt="Google Play"
                        className="store-link"
                        href={app.androidURL}
                        onClick={() => window.open(app.androidURL, "_blank")}
                        size="medium"
                        spaced={false}
                        src="src/img/apps/google-play.svg"
                        title="Get it on Google Play"
                    />
                  ) : (
                    <p className="text"
                        style={{textAlign: "center"}}
                    >
                      Not available on Google Play for now
                    </p>
                  )
                }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column className="shadow-container">
                {
                  app.androidURL && (
                    <Image size="medium"
                        spaced={false}
                        src="src/img/apps/google-play-button-shadow.svg"
                    />
                  )
                }
                </Grid.Column>
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
  screenshotUrls: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string
}

export default Slide;
