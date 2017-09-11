import React from "react";
import Carousel from "nuka-carousel";
import "../../styles/Screens/OurApps.css";
import BulletControl from "./BulletControl";
import PreviousControl from "./PreviousControl";
import NextControl from "./NextControl";
import Slide from "./Slide";
import {Grid} from "semantic-ui-react";

const decoratorsIfMoreOne = [{
  component: BulletControl,
  position: "BottomCenter",
  style: {}
}, {
  component: PreviousControl,
  position: "CenterLeft",
  style: {}
}, {
  component: NextControl,
  position: "CenterRight",
  style: {}
}];
const settings = {
  wrapAround: true,
  speed: 500,
  slidesToShow: 1
};
const totalPossible = 16;
const one = 1;

class OurApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {extract: []};
  }
  componentWillMount() {
    this.getAvailableApps();
  }
  getNeededDecorators() {
    return (this.state.extract.length > one) ? decoratorsIfMoreOne : [];
  }
  getAvailableApps() {
    if (!global.IS_CLIENT)
      return;
    this.setState({
      extract: [{
        icon: "https://lh3.googleusercontent.com/d2faPTUcaQjxh0CmIz-JrYIUxJrwa\
R5deb1AwpqMCFSqCm4xT0ji-o1ZR1PwyJh4QU0=w300",
        description: "Бесплатная логическая настольная игра для детей и \
взрослых Break a Code - разновидность популярной игры Мастермайнд.\nСделайте \
вызов себе и своим способностям разгадывать шифры с помощью этого приложения. \
Отличная развивающая игра для детей и взрослых.\n\nВ данной игре необходимо \
разгадать задуманный компьютером код за определенное количество ходов.\n\
Почему вам понравится играть?\n\
- Большой выбор уровней и сложные комбинации для опытных игроков\n\
- Возможность быстрой игры, которая будет сгенерирована случайным образом\n\
- Прохождение уровней на время\n\
- Отличный средство отдыха, когда ваш мозг перегружен\n\
- Любителей \“Быки и Коровы\” порадует разновидность данной игры с приятным \
интерфейсом",
        screenshotUrls: [
          "https://lh3.googleusercontent.com/fBEEwqhbFpmwZ-M_G2wS36T2B2j5w1-oG\
AIFuKN_zmU74YTtvdumpr3ChycOzA-z-o0=h900",
          "https://lh3.googleusercontent.com/nX6yc73-Wqe2HWIatnxjFWiOsyZz9Lqb3\
D-tIG1dfhNWMchSvzYaYs2_dp-jjt1Dl2A=h900",
          "https://lh3.googleusercontent.com/22MJFaT0jNxpXj307xhtg_M9XW-Jlp7Fk\
DIKSVf9EQ8nxKc8ykm_tiRpeP8X9y7M7A=h900",
          "https://lh3.googleusercontent.com/NHHlbYIMYBVvTH76byGikovjdmFEGrnGS\
3Zc7Sb77o8opgN8wFQ_FKIzxoOn-ZHlllgC=h900",
          "https://lh3.googleusercontent.com/jMQuo-VEfM6CXsypK9NfGtwnLgqZFZXMt\
t9TViGLILYPinunLF4IDE8iL6usM-J4-NY=h900"
        ],
        name: "Break a Code",
        bundleId: "com.lingvokot.mastermind"
      }]
    });
  }
  render() {
    return (
      <Grid columns={1}
          stackable
      >
        <Grid.Column width={totalPossible}>
          <Carousel {...settings}
              decorators={this.getNeededDecorators()}
              dragging={this.state.extract.length > one}
              swiping={this.state.extract.length > one}
          >
          {this.state.extract.map((app) => {
            return (
              <Slide {...app}
                  key={app.bundleId}
              />
            )
          })}
          </Carousel>
        </Grid.Column>
      </Grid>
    );
  }
}

export default OurApps;
