var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");

var postcssImport = require("postcss-import");

var postcssMixins = require("postcss-mixins");
var postcssVars = require("postcss-simple-vars");
var postcssNested = require("postcss-nested");

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
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=10000!img-loader?progressive=true' },
      { test: /fonts\/.*\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ],
    "dev": [
      { test: /(\.jsx)|(\.js)$/, include: path.join(__dirname, "src"), loader: "react-hot-loader!babel-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpe?g$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" },
      { test: /fonts\/.*\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: {
    'prod': [
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new StaticSiteGeneratorPlugin("main", ["/index.html"]),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin("[name].css")
    ],
    'dev': [
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin("[name].css")
    ]
  },
  postcss_plugins: {
    "prod": [
      cssnano
    ],
    "dev": [
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
    preLoaders: [],
    loaders: variables.module_loaders[BUILD_TYPE],
    noParse: [],
  },

  plugins: variables.plugins[BUILD_TYPE],

  cache: true,
  debug: true,
  devtool: BUILD_TYPE_IS_PROD ? "none":"source-map",
  progress: true,

  stats: {
    timings: true,
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: ["node_modules"],
    alias: {},
    root: __dirname
  },

  postcss: function (webpack) {
      return variables.postcss_plugins[BUILD_TYPE].concat([
        postcssMixins,
        postcssNested,
        postcssVars,
        autoprefixer,
        postcssImport({
            addDependencyTo: webpack
        })
      ]);
  }

};
