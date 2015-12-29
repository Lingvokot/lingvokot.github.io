import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

import App from "src/components/App.js";

// are we running in DOM environment?
global.IS_CLIENT = typeof document !== "undefined";

let render = new Function(); // server renderer as noop by default

// this element will be rendered both for client and server side.
const RootElement = <App />;

if (global.IS_CLIENT) {
  ReactDOM.render(
    RootElement,
    document.getElementById("app-container")
  );
} else {
  render = function (locals, callback) {
    const markup = ReactDOMServer.renderToString(RootElement);
    callback(null, markup);
  }
}

export default render;
