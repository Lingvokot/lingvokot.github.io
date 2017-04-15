import React from "react";
import {Grid} from "semantic-ui-react";

class Slide extends React.Component {
	render() {
    let app = this.props.app;
    return (
      <Grid columns={2} stackable key={app.bundleId} style={{paddingBottom: 40}}>
        <Grid.Column width={8}>
          <img alt="screenshot" src={app.screenshotUrls[0] || "src/img/apps/devices.svg"}
              className="image"/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid columns={2}>
            <Grid.Column width={16}>
              <h2 className="header header--level-2">
                <div className="header--big">Applications</div>
                <div className="header--small header--heavy">
                  You want to use
                </div>
              </h2>
              <h3 className="header header--level-3 header--green">
                {app.name}
              </h3>
              <p className="text text--green"
                  dangerouslySetInnerHTML={{__html: app.description}}></p>
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid.Row>
                <Grid.Column className="above-shadow">
                  <a title="Get it on App Store" className="store-link" href={app.url}>
                    <img alt="App Store" src="src/img/apps/app-store.svg"/>
                  </a>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column className="shadow-container">
                  <img src="src/img/apps/app-store-button-shadow.svg"/>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid.Row>
                <Grid.Column className="above-shadow">
                  <a title="Get it on Google Play" className="store-link"
                      href={"https://play.google.com/store/apps/details?id=" + app.bundleId}>
                    <img alt="Google Play" src="src/img/apps/google-play.svg"/>
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

export default Slide;