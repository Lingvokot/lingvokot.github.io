process.env.NODE_ENV = "development";

var path = require("path");
var webpackConfig = require("./webpack.config.js");

webpackConfig.module.loaders.push({
  test: /\.spec\.js$/,
  include: path.join(__dirname, "test"),
  loader: "babel-loader!imports?test_bootstrap=test/test_bootstrap.js"
});
webpackConfig.devtool = "inline-source-map";

// quixote is served as prebuilt bundle so skip parsing it
webpackConfig.module.noParse.push(/quixote\.js$/);

module.exports = function (config) {
  config.set({
    browsers: ((process.platform == "darwin") ? [ "Firefox", "Chrome", "Safari" ] : ["Firefox", "Chrome"]),
    frameworks: [ "mocha" ], //use the mocha test framework
    files: [ //just load these files
       "test/test_bundle.js", "dist/main.css",
       {pattern: "src/img/**/*.svg", watched: false, included: false, served: true, nocache: false},
       {pattern: "dist/*", watched: false, included: false, served: true, nocache: false}
    ],
    preprocessors: {
      "test/test_bundle.js": [ "webpack", "sourcemap" ] //preprocess with webpack and our sourcemap loader
    },
    proxies: {
      "/src/img/": "http://localhost:9876/base/src/img/",
      "/dist/": "http://localhost:9876/base/dist/",
      "/test/img/": "http://localhost:9876/base/test/img/"
    },
    reporters: [ "dots" ], //report results in this format
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true //please don"t spam the console when running in karma!
    },
    logLevel: config.LOG_DEBUG,
    // Timeout for capturing a browser (in ms).
    captureTimeout: 180 * 1e3,

    // to avoid DISCONNECTED messages
    browserDisconnectTimeout : 10000, // default 2000
    browserDisconnectTolerance : 1, // default 0
    browserNoActivityTimeout : 60 * 1e3, //default 10000
  });
};
