// this file used to concat all test files into one js file
console.log("butthurt1");
var context = require.context(".", true, /.+\.spec\.js$/);
console.log("butthurt2");
context.keys().forEach(context);
module.exports = context;
