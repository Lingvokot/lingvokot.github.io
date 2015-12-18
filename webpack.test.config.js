/*******************************
     Webpack config for tests
********************************/
process.env.NOVE_ENV = "development";

var glob = require("glob");
var path = require("path");

var webpackConfig = require("./webpack.config.js");
var testFiles = glob.sync("./test/**/*.spec.js");

var mochaLoader = { test: /\.spec\.js$/, include: path.join(__dirname, "test"), loader: "mocha-loader!react-hot-loader!babel-loader!imports?test_bootstrap=test/test_bootstrap.js" };

// Patching webpack config.
webpackConfig.module.loaders.push(mochaLoader);

// Additional stuff for webpack.

webpackConfig.output.pathinfo = false;

// quixote is served as prebuilt bundle so skip parsing it
webpackConfig.module.noParse.push(/quixote\.js$/);

// Finally, make each entry for each file.

// Prepend test bootstrap script
webpackConfig.entry = {
  "!ALL-CASES": "./test/test_bundle.js"
};

// Execute each test case as separate entry
testFiles.forEach(function (testFile) {
  var entryName = path.basename(testFile, ".spec.js");
  webpackConfig.entry[entryName] = [testFile];
});

module.exports = webpackConfig;
