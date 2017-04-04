import React from "react";
import ReactDOM from "react-dom";

import Footer from "src/components/Footer.js";

function getElementMiddleX(element1) {
  let position = element1.getRawPosition();
  return Math.round((position.left + position.right) / 2);
}

describe("Footer", () => {
  var frame, rootElement, element, pageBody;
  before(function(done) {
    frame = quixote.createFrame({
      stylesheet: ["/base/dist/main.css", "/base/semantic/dist/semantic.min.css"]
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
    element = frame.get(".footer");
    pageBody = frame.body();
  });

  it('Footer leaves no spaces at the left, right and bottom sides of the page', () => {
    element.assert({
      left: rootElement.clientLeft,
      right: rootElement.clientLeft + rootElement.clientWidth,
      bottom: rootElement.clientTop + rootElement.clientHeight
    });
  });

  it("Child elements are centered", () => {
    let expectedMiddleX = getElementMiddleX(pageBody);
    let childrenContainer = frame.get(".footer .ui.five.column.grid.footer-socials");
    expect(getElementMiddleX(childrenContainer)).to.equal(expectedMiddleX);
    let textLabels = frame.getAll(".footer span");
    expect(textLabels.length()).to.equal(2);
    for (let i = 0; i < textLabels.length(); i++) {
      let label1 = textLabels.at(i);
      expect(getElementMiddleX(label1)).to.equal(expectedMiddleX);
    }
  });
});