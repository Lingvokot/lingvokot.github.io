var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");


// Switch plugins / build options by NODE_ENV variable
var BUILD_TYPE = process.env["NODE_ENV"] == "production" ? "prod":"dev";
var BUILD_TYPE_IS_PROD = BUILD_TYPE == "prod";

// Config entries per BUILD_TYPE variable
var variables = {
  entry: {
    "prod": [
      "./src/index.js"
    ],
    "dev": [
      "babel-polyfill",
      "./src/index.js"
    ],
  },
  module_loaders: {
    "prod": [
      { test: /(\.jsx)|(\.js)$/, include: path.join(__dirname, "src"), loader: "babel-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })},
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=10000!img-loader?progressive=true' },
      { test: /fonts\/.*\.(ttf|eot|svg|otf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ],
    "dev": [
      { test: /(\.jsx)|(\.js)$/, include: path.join(__dirname, "src"), loader: "babel-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })},
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpe?g$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" },
      { test: /fonts\/.*\.(ttf|eot|svg|otf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: {
    'prod': [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new webpack.DefinePlugin({
        BUILD_TYPE_IS_PROD: BUILD_TYPE_IS_PROD,
        ENV: process.env["NODE_ENV"],
      }),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new StaticSiteGeneratorPlugin("main", ["/index.html"]),
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin("[name].css")
    ],
    'dev': [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new webpack.DefinePlugin({
        BUILD_TYPE_IS_PROD: BUILD_TYPE_IS_PROD,
        ENV: process.env["NODE_ENV"],
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin("[name].css")
    ]
  }
};

module.exports = {
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].js",
    publicPath: "/dist/",
    libraryTarget: "umd"
  },
  entry: variables.entry[BUILD_TYPE],
  module: {
    loaders: variables.module_loaders[BUILD_TYPE],
    noParse: [new RegExp("^$")]
  },
  plugins: variables.plugins[BUILD_TYPE],
  cache: true,
  devtool: BUILD_TYPE_IS_PROD ? "none":"source-map",
  stats: {
    timings: true,
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    modules: [__dirname, "node_modules"],
    alias: {}
  }
};
