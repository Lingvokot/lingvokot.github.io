import React from "react";
import ReactDOM from "react-dom";

import Footer from "src/components/Footer.js";

describe("Footer", () => {
  var frame, rootElement, element, pageBody;
  before(function(done) {
    frame = quixote.createFrame({}, done);
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
      left: pageBody.left,
      right: pageBody.right,
      bottom: pageBody.bottom
    });
  });

  it("Child elements are centered", () => {
    let expectedCenterX = pageBody.width / 2;
    let childrenContainer = frame.get(".footer .ui.three.column.grid.footer-socials");
    let childrenContainerPosition = childrenContainer.getRawPosition();
    expect((childrenContainerPosition.left + childrenContainerPosition.right) / 2)
          .to.equal(expectedCenterX);
    let textLabels = frame.getAll(".footer span");
    expect(textLabelsInList.length()).to.equal(2);
    for (let i = 0; i < textLabelsInList.length(); i++) {
      let label1 = textLabelsInList.at(i);
      let labelPosition = label1.getRawPosition();
      expect((labelPosition.left + labelPosition.right) / 2).to.equal(expectedCenterX);
    }
  });
});