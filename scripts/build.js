////////////////////////////////////////////////
// This will build all stuff
////////////////////////////////////////////////

var path = require("path");
var fs = require("fs");
var webpack = require("webpack");
var rimraf = require("rimraf");
var Minimize = require('minimize');

var minimize = new Minimize();

// Remove everything in dist dir
console.log('Cleanup dist dir...');
rimraf(path.join(__dirname, "../dist/*"), onDistCleaned);

// Will be run after dist/* removal
function onDistCleaned () {

  // run webpack with production environment
  process.env['NODE_ENV'] = 'production';

  var webpackConfig = require('../webpack.config.js');

  console.log('Compiling bundle with webpack...');

  webpack(webpackConfig, function(err, stats) {
    if (err)
      throw err;

    var jsonStats = stats.toJson();

    var statsPath = path.join(__dirname, "../dist/bundle-stats.json");
    fs.writeFileSync(statsPath, JSON.stringify(jsonStats));
    console.log("Bundle stats written to " + statsPath + ". Go to https://webpack.github.io/analyse/ to analyse it.");

    if (jsonStats.errors.length > 0) {
      console.error("There was errors compiling bundle");
      console.log(jsonStats);
      return console.error(jsonStats.errors);
    }

    if (jsonStats.warnings.length > 0) {
      console.warn("There was warnings compiling bundle");
      console.warn(jsonStats.warnings);
    }

    onWebpackSuccessfullyCompiled();

  });

}

// Will be run after webpack build
function onWebpackSuccessfullyCompiled () {
  // Load template file and minify it
  var template = fs.readFileSync(path.join(__dirname, '../index-client.html'), 'utf8');

  minimize.parse(template, function (error, data) {
    if (error)
      throw error;

    onHTMLMinified(data);
  });
}

// Will be run after HTML minify
function onHTMLMinified (template) {
  // Replace HTML
  var markup = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  var html = template.replace('React three will be right there', markup);

  var filename = path.join(__dirname, '../index.html');
  fs.writeFileSync(filename, html);

  console.log('HTML written to ', filename);
}
