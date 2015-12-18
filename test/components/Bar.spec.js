import React from "react";
import ReactDOM from "react-dom";

import Bar from "src/components/Bar.js";

describe("Bar", () => {

  var frame;
  var container;
  var root;
  var rootElement;
  var element;

  before(function(done) {
    frame = quixote.createFrame({
      stylesheet: "/_karma_webpack_/test/test_bundle.js.css"
    }, done);
  });

  after(function() {
    frame.remove();
  });

  beforeEach(function() {
    frame.reset();

    container = frame.add('<div id="app-container"></div>', "container");
    root = frame.get("#app-container", "react root element");
    rootElement = root.toDomElement();

    ReactDOM.render(
      <Bar />,
      rootElement
    );

    element = frame.get(".Bar");
  });

  it('should be blue', () => {
    element.getRawStyle("color").should.be.equal("rgb(0, 0, 255)");
  });

});
