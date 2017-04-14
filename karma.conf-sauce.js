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

var customLaunchers = {
  sl_chrome: {
    base: "SauceLabs",
    browserName: "chrome",
    platform: "Windows 10",
  },
  sl_firefox: {
    base: "SauceLabs",
    browserName: "firefox",
    platform: "Windows 10",
  },
  sl_android: {
    base: "SauceLabs",
    browserName: "Chrome",
    platform: "Android"
  },
  sl_ios: {
    base: "SauceLabs",
    browserName: "Safari",
    deviceName: 'iPhone Simulator',
    platform: "iOS"
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
      "dist/main.css", "./node_modules/semantic-ui/dist/semantic.min.css",
      "./node_modules/jquery/dist/jquery.min.js", "./node_modules/semantic-ui/dist/semantic.min.js"
    ],
    preprocessors: {
      "test/test_bundle.js": [ "webpack", "sourcemap" ] //preprocess with webpack and our sourcemap loader
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
