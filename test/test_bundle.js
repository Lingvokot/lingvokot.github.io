// this file used to concat all test files into one js file

console.log("butthurt4");
var context = require.context(".", true, /.+\.spec\.js$/);
console.log(context);
context.keys().forEach(context);
module.exports = context;
