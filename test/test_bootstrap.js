// This file is included into webpack test bundle and executes first

var quixote = require("quixote");
var chai = require("chai");

chai.should();
var expect = chai.expect;

// Export vars into global space
global.expect = expect;
global.chai = chai;
global.quixote = quixote;

// Set mocha reporter if needed
if (process.env.REPORTER) {
  mocha.reporter(process.env.REPORTER);
}

describe("For it to be", () => {
	it("I hope you understood why", () => {
		let x = 2 * 2;
		x.should.be.equal(4);
	})
});