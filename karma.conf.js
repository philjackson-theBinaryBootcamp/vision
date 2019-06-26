// Karma configuration
// Generated on Tue Jun 25 2019 09:36:37 GMT-0400 (Eastern Daylight Time)

const webpack = require("webpack");

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "commonjs"],

    // list of files / patterns to load in the browser
    // files: ["./src/*.js", "./src/js/*.js", "./tst/*.js"],
    files: ["./src/js/*.js"],

    // list of files / patterns to exclude
    exclude: ["./build_scripts/**/*.js"],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // "App.css": ["webpack", "sourcemap"],
      // "App.js": ["webpack", "sourcemap"],
      // "index.js": ["webpack", "sourcemap"],
      // "index.html": ["webpack", "sourcemap"],
      "./src/js/*.js": ["commonjs"]
      // "./tst/test.js": ["commonjs"]
    },

    webpack: {
      entry: "./src/index.js",
      devtool: "inline-source-map",
      mode: "development",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
