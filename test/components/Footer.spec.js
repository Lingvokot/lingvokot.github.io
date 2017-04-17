import React from "react";
import ReactDOM from "react-dom";

import Footer from "src/components/Footer.js";

function getElementMiddleX(element1) {
  let position = element1.getRawPosition();
  return Math.round((position.left + position.right) / 2);
}

function getElementMiddleY(element1) {
  let position = element1.getRawPosition();
  return Math.round((position.top + position.bottom) / 2);
}

function hexNotationToRgb(hex1) {
  let colorNumber = Number.parseInt(hex1.substr(1), 16);
  return `rgb(${colorNumber >> 16}, ${(colorNumber >> 8) % 256}, ${colorNumber % 256})`;
}

describe("Footer", () => {
  var frame, rootElement, element, pageBody;
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

    ReactDOM.render(
      <Footer />,
      rootElement
    );
    element = frame.get("#footer");
    pageBody = frame.body();
  });

  it('Footer leaves no spaces at the left, right and bottom sides of the page', () => {
    element.assert({
      top: rootElement.clientTop,
      left: rootElement.clientLeft,
      right: rootElement.clientLeft + rootElement.clientWidth,
      bottom: rootElement.clientTop + rootElement.clientHeight
    });
  });

  it("Child elements are centered", () => {
    let expectedMiddleX = getElementMiddleX(element);
    let expectedMiddleY = getElementMiddleY(element);
    let childrenContainer = frame.get("#footer .ui.five.column.grid.footer-socials");
    expect(getElementMiddleX(childrenContainer)).to.equal(expectedMiddleX);
    expect(getElementMiddleY(childrenContainer)).to.equal(expectedMiddleY);
    let textLabels = frame.getAll("#footer span");
    expect(textLabels.length()).to.equal(2);
    for (let i = 0; i < textLabels.length(); i++) {
      let label1 = textLabels.at(i);
      expect(Math.abs(getElementMiddleX(label1) - expectedMiddleX)).to.be.below(5);
    }
  });

  it("Colors and capitalization are correct", () => {
    let expectedBackgroundColor = hexNotationToRgb("#7cd985");
    let expectedTextColor = hexNotationToRgb("#3d6d42");
    expect(element.getRawStyle("background-color")).to.equal(expectedBackgroundColor);
    let textsInFooter = frame.getAll("#footer .footer-text");
    for (let i = 0; i < textsInFooter.length(); i++) {
      let text1 = textsInFooter.at(i);
      expect(text1.getRawStyle("color")).to.equal(expectedTextColor);
      expect(text1.getRawStyle("text-transform")).to.equal("uppercase");
    }
  });
});
