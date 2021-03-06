process.env.NODE_ENV = "development";

var path = require("path");
var webpackConfig = require(path.resolve("webpack.config.js"));

webpackConfig.module.loaders.push({
  test: /\.spec\.js$/,
  include: path.join(__dirname, "test"),
  loader: "babel-loader!imports-loader?test_bootstrap=test/test_bootstrap.js"
});
webpackConfig.devtool = "inline-source-map";

var seleniumPlatforms = ["Windows 10", "Linux", "macOS 10.12"];
var appiumPlatforms = [
  {platform: "Android", deviceName: "Android Emulator"},
  {platform: "iOS", deviceName: "iPhone Simulator"}
];
var knownBrowsers = ["chrome", "firefox", "safari"];
var customLaunchers = {};

//here custom launchers are generated
/*
On all platforms Chrome and Firefox are supported but Safari is
supported only on MacOS and iOS
*/
for (var i = 0; i < seleniumPlatforms.length; i++) {
  var platform1 = seleniumPlatforms[i];
  for (var j = 0; j < knownBrowsers.length; j++) {
    var browser1 = knownBrowsers[j];
    if ((platform1 != "macOS 10.12") && (browser1 == "safari"))
      continue;
    else
      customLaunchers[`sl_${platform1.split(" ")[0].toLowerCase()}_` +
                      browser1] = {
        base: "SauceLabs",
        browserName: browser1,
        platform: platform1
      };
  }
}
for (var i = 0; i < appiumPlatforms.length; i++) {
  var platform1 = appiumPlatforms[i];
  var device1 = platform1.deviceName;
  var platformName = platform1.platform;
  for (var j = 0; j < knownBrowsers.length; j++) {
    var browser1 = knownBrowsers[j];
    browser1 = browser1.substr(0, 1).toUpperCase() + browser1.substr(1);
    if ((platformName != "iOS") && (browser1 == "Safari"))
      continue;
    else
      customLaunchers[`sl_${platformName.split(" ")[0].toLowerCase()}_` +
                      browser1] = {
        base: "SauceLabs",
        browserName: browser1,
        platform: platformName,
        deviceName: device1
      }
  }
}

module.exports = function (config) {
  config.set({
    singleRun: true, //just run once by default
    sauceLabs: {
      testName: 'Web App Unit Tests',
      recordVideo: true,
      recordScreenshots: true
    },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    frameworks: [ "mocha" ], //use the mocha test framework
    files: [ //just load these files
      "test/test_bundle.js", "dist/main.css",
      {pattern: "src/img/**/*.svg", watched: false, included: false, served: true, nocache: false},
      {pattern: "dist/*", watched: false, included: false, served: true, nocache: false},
      {pattern: "test/img/*", watched: false, included: false, served: true, nocache: false}
    ],
    preprocessors: {
      "test/test_bundle.js": [ "webpack", "sourcemap" ] //preprocess with webpack and our sourcemap loader
    },
    proxies: {
      "/src/img/": "http://localhost:9876/base/src/img/",
      "/dist/": "http://localhost:9876/base/dist/",
      "/test/img/": "http://localhost:9876/base/test/img/"
    },
    reporters: [ "dots", "saucelabs" ], //report results in this format
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true //please don"t spam the console when running in karma!
    },

    // Timeout for capturing a browser (in ms).
    captureTimeout: 180 * 1e3,

    // to avoid DISCONNECTED messages
    browserDisconnectTimeout : 10000, // default 2000
    browserDisconnectTolerance : 1, // default 0
    browserNoActivityTimeout : 60 * 1e3 //default 10000
  });
};
