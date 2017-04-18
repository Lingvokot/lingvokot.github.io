import React from "react";
import ReactDOM from "react-dom";

import OurApps from "src/components/Screens/OurApps.js";

let extract = [
  {
    icon: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>\
Donec volutpat, odio quis tempor tempor, ex risus lacinia eros, a feugiat purus ligula eget tellus.<br/>\
Suspendisse cursus rhoncus dolor, quis euismod lectus.<br/>\
Etiam cursus gravida turpis, nec scelerisque nisi cursus vitae.<br/>\
Integer euismod rhoncus nunc, in congue justo egestas rutrum.<br/>\
Praesent sollicitudin mi odio, id aliquam purus rhoncus posuere.<br/>\
Maecenas volutpat, ligula at faucibus sagittis, augue nulla euismod nunc, vitae porttitor arcu elit non felis.<br/>\
Suspendisse iaculis orci id efficitur vulputate.<br/>Proin pellentesque ligula ac dignissim mollis.<br/>\
Morbi id lacus ac tortor lobortis interdum vitae placerat arcu.<br/>\
Suspendisse elit mi, consectetur vitae gravida interdum, feugiat vitae turpis.<br/>\
Fusce sagittis quam nec pharetra eleifend.<br/>Quisque mollis vehicula eros.",
    screenshotUrls: [
      "url1.domain/img/id1",
      "url1.domain/img/id2"
    ],
    name: "Application 1",
    url: "url1.domain/application1",
    bundleId: "com.developer1.application1"
  },
  {
    icon: "",
    description: "Maecenas volutpat, ligula at faucibus sagittis, augue nulla euismod nunc, vitae porttitor arcu elit non felis.<br/>\
Suspendisse iaculis orci id efficitur vulputate.",
    screenshotUrls: [],
    name: "Application 2",
    url: "url2.domain/application2",
    bundleId: "com.developer2.application2"
  },
  {
    icon: "",
    description: "Proin pellentesque ligula ac dignissim mollis.<br/>\
Morbi id lacus ac tortor lobortis interdum vitae placerat arcu.<br/>\
Suspendisse elit mi, consectetur vitae gravida interdum, feugiat vitae turpis.<br/>\
Fusce sagittis quam nec pharetra eleifend. Quisque mollis vehicula eros.",
    screenshotUrls: [
      "url3.domain/img/id3"
    ],
    name: "Application 3",
    url: "url3.domain/application3",
    bundleId: "com.developer3.application3"
  }
];

describe("OurApps", () => {
  var frame, rootElement, element, pageBody, reactElement;
	before(function(done) {
    frame = quixote.createFrame({
      stylesheet: [
        "/base/dist/main.css",
        "http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css"
      ]
    }, done);
  });
  after(function() {
    frame.remove();
  });
  beforeEach(function() {
    frame.reset();
    let container = frame.add('<div id="app-container"></div>', "container");
    let root = frame.get("#app-container", "react root element");
    rootElement = root.toDomElement();
    reactElement = ReactDOM.render(<OurApps />, rootElement);
    element = frame.get(".one.grid");
    pageBody = frame.body();
  });

  it("Checking presence of necessary elements in case there are no apps", () => {
    let sliderList = frame.get(".slider-list").toDomElement();
    expect(sliderList.children.length).to.equal(0);
    for (let i = 0; i < 3; i++) {
      let controls1 = frame.getAll(".slider-decorator-" + i);
      expect(controls1.length().to.equal(1));
    }
    let control = frame.get(".slider-decorator-0 > ul").toDomElement();
    expect(control.children.length).to.equal(0);
  });

  it("Checking presence of necessary elements in case there are one or more apps", (done) => {
    reactElement.setState({extract}, () => {
      let sliderList = frame.get('.slider-list').toDomElement();
      expect(sliderList.children.length).to.equal(extract.length);
      for (let i = 0; i < 3; i++) {
        let controls1 = frame.getAll(".slider-decorator-" + i);
        expect(controls1.length().to.equal(1));
      }
      let control = frame.get(".slider-decorator-0 > ul").toDomElement();
      let dots = control.children;
      expect(dots.length).to.equal(extract.length);
      for (let i = 0; i < sliderList.children.length; i++) {
        let slide1 = sliderList.children[i];
        expect(dots[i].classList.contains("active")).to.equal(i == 0);
        let screenshot = frame.getAll(".slider-list > li:nth-child(" + (i + 1) + ") img[alt=\"screenshot\"]");
        expect(screenshot.length()).to.equal(1);
        screenshot = screenshot.at(0).toDomElement();
        expect(screenshot.src.replace("http://localhost:9876/", "")).to.equal(extract[i].screenshotUrls[0] || "src/img/apps/devices.svg");
      }
      done();
    });
  });
});
