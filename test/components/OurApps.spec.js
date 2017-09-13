import React from "react";
import ReactDOM from "react-dom";

import OurApps from "src/components/Screens/OurApps.js";

let extract = [
  {
    icon: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Donec volutpat, odio quis tempor tempor, ex risus lacinia eros, a feugiat purus ligula eget tellus.<br>\
Suspendisse cursus rhoncus dolor, quis euismod lectus.<br>\
Etiam cursus gravida turpis, nec scelerisque nisi cursus vitae.<br>\
Integer euismod rhoncus nunc, in congue justo egestas rutrum.<br>\
Praesent sollicitudin mi odio, id aliquam purus rhoncus posuere.<br>\
Maecenas volutpat, ligula at faucibus sagittis, augue nulla euismod nunc, vitae porttitor arcu elit non felis.<br>\
Suspendisse iaculis orci id efficitur vulputate.<br>Proin pellentesque ligula ac dignissim mollis.<br>\
Morbi id lacus ac tortor lobortis interdum vitae placerat arcu.<br>\
Suspendisse elit mi, consectetur vitae gravida interdum, feugiat vitae turpis.<br>\
Fusce sagittis quam nec pharetra eleifend.<br>Quisque mollis vehicula eros.",
    screenshotUrls: [
      "base/test/img/unnamed1.jpg",
      "base/test/img/unnamed2.jpg"
    ],
    name: "Application 1",
    androidURL: "https://url1.domain/application1",
    iOSURL: "https://url1.domain/application1",
    bundleId: "com.developer1.application1"
  },
  {
    icon: "",
    description: "Maecenas volutpat, ligula at faucibus sagittis, augue nulla euismod nunc, vitae porttitor arcu elit non felis.<br>\
Suspendisse iaculis orci id efficitur vulputate.",
    screenshotUrls: [],
    name: "Application 2",
    androidURL: "https://url2.domain/application2",
    iOSURL: "https://url2.domain/application2",
    bundleId: "com.developer2.application2"
  },
  {
    icon: "",
    description: "Proin pellentesque ligula ac dignissim mollis.<br>\
Morbi id lacus ac tortor lobortis interdum vitae placerat arcu.<br>\
Suspendisse elit mi, consectetur vitae gravida interdum, feugiat vitae turpis.<br>\
Fusce sagittis quam nec pharetra eleifend. Quisque mollis vehicula eros.",
    screenshotUrls: [
      "base/test/img/unnamed3.jpg"
    ],
    name: "Application 3",
    androidURL: "https://url1.domain/application3",
    iOSURL: "https://url1.domain/application3",
    bundleId: "com.developer3.application3"
  }
];

describe("OurApps", () => {
  var frame, rootElement, pageBody, reactElement;
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
    pageBody = frame.body();
  });

  var checkDecoratorsPresence = function(expectedValue) {
    for (let i = 0; i < 3; i++) {
      let controls1 = frame.getAll(".slider-decorator-" + i);
      expect(controls1.length()).to.equal(expectedValue ? 1 : 0);
    }
  }
  var checkSlideConsistency = function(slide, dataSet) {
    let screenshots = slide.querySelectorAll("img[alt=\"screenshot\"]");
    expect(screenshots.length).to.equal(1);
    let screenshot = screenshots[0];
    let screenshotRelativeSrc = screenshot.src.replace("http://localhost:9876/", "");
    expect(screenshotRelativeSrc).to.equal(dataSet.screenshotUrls[0] || "src/img/apps/devices.svg");

    let level2Headers = slide.querySelectorAll("h2");
    expect(level2Headers.length).to.equal(1);
    let maybeConstantHeader = level2Headers[0];
    let headerChildren = maybeConstantHeader.children;
    expect(headerChildren.length).to.equal(2);
    expect(headerChildren[0].innerText).to.equal("APPLICATIONS");
    expect(headerChildren[1].innerText).to.equal("YOU WANT TO USE");

    let level3Headers = slide.querySelectorAll("h3");
    expect(level3Headers.length).to.equal(1);
    let maybeTitle = level3Headers[0];
    expect(maybeTitle.innerText).to.equal(dataSet.name);

    let paragraphs = slide.querySelectorAll("p");
    expect(paragraphs.length).to.equal(1);
    let description = paragraphs[0];
    expect(description.innerHTML).to.equal(dataSet.description);

    let refs = slide.querySelectorAll("a.store-link");
    expect(refs.length).to.equal(2);
    expect(refs[0].href).to.equal(dataSet.iOSURL);
    expect(refs[1].href).to.equal(dataSet.androidURL);
    expect(refs[0].children.length).to.equal(1);
    expect(refs[1].children.length).to.equal(1);
    let maybeImages = [refs[0].children[0], refs[1].children[0]];
    let expectedAlts = ["App Store", "Google Play"];
    let expectedSrcs = ["src/img/apps/app-store.svg", "src/img/apps/google-play.svg"];
    for (let i = 0; i < 2; i++) {
      let maybeImage = maybeImages[i];
      expect(maybeImage.alt).to.equal(expectedAlts[i]);
      expect(maybeImage.src.replace("http://localhost:9876/", ""))
                        .to.equal(expectedSrcs[i]);
    }
  }

  it("Checking presence of necessary elements in case there are no apps", () => {
    reactElement = ReactDOM.render(<OurApps apps={[]}/>, rootElement);
    let sliderList = frame.get(".slider-list").toDomElement();
    expect(sliderList.children.length).to.equal(0);
    checkDecoratorsPresence(false);
    ReactDOM.unmountComponentAtNode(rootElement);
  });
  it("Checking presence of necessary elements in case there is one app", () => {
    reactElement = ReactDOM.render(<OurApps apps={[extract[0]]}/>, rootElement);
    let sliderList = frame.get(".slider-list").toDomElement();
    let slides = sliderList.children;
    expect(slides.length).to.equal(1);
    checkDecoratorsPresence(false);
    checkSlideConsistency(slides[0], extract[0]);
    ReactDOM.unmountComponentAtNode(rootElement);
  });
  it("Checking presence of necessary elements in case there are more than one apps", () => {
    reactElement = ReactDOM.render(<OurApps apps={extract}/>, rootElement);
    let sliderList = frame.get('.slider-list').toDomElement();
    expect(sliderList.children.length).to.equal(extract.length);
    checkDecoratorsPresence(true);
    let bulletControl = frame.get(".slider-decorator-0 > ul").toDomElement();
    let dots = bulletControl.children;
    expect(dots.length).to.equal(extract.length);
    for (let i = 0; i < sliderList.children.length; i++) {
      let slide1 = sliderList.children[i];
      expect(dots[i].classList.contains("active")).to.equal(i == 0);
      checkSlideConsistency(slide1, extract[i]);
    }
    ReactDOM.unmountComponentAtNode(rootElement);
  });
});
