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
    browsers: [ "Firefox", "Chrome", "Opera", 'IE11 - Win7' ],
    frameworks: [ "mocha" ], //use the mocha test framework
    files: [
      "test/test_bundle.js", //just load these files
      "dist/main.css", "semantic/dist/semantic.min.css",
      "jquery-3.1.1.min.js", "semantic/dist/semantic.min.js"
    ],
    preprocessors: {
      "test/test_bundle.js": [ "webpack", "sourcemap" ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ "dots" ], //report results in this format
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true //please don"t spam the console when running in karma!
    },
    logLevel: config.LOG_DEBUG
  });
};
