// This file is included into webpack test bundle and executes first

var quixote = require("quixote");
var chai = require("chai");

var should = chai.should();
var expect = chai.expect;

// Export vars into global space
global.expect = expect;
global.chai = chai;
global.quixote = quixote;

// Set mocha reporter if needed
if (process.env.REPORTER) {
  mocha.reporter(process.env.REPORTER);
}