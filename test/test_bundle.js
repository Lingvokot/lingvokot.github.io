// this file used to concat all test files into one js file

var context = require.context(".", true, /.+\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
