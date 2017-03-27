import React from "react";
import ReactDOM from "react-dom";

import Footer from "src/components/Footer.js";

describe("Footer", () => {
  var frame, container, root, rootElement, element;

  before(function(done) {
    frame = quixote.createFrame({}, done);
  });

  after(function() {
    frame.remove();
  });

  beforeEach(function() {
    frame.reset();

    container = frame.add('<div id="app-container"></div>', "container");
    root = frame.get("#app-container", "react root element");
    rootElement = root.toDomElement();
    console.log("rootElement");
    console.log(rootElement);

    ReactDOM.render(
      <Footer />,
      rootElement
    );

    element = frame.get(".footer");
    console.log("Element");
    console.log(element);
  });

  it('for it to be', () => {
    console.log("for it to be");
    let k = 2 * 2;
    k.should.equal(4);
  });

});