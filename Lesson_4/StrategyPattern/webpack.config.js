"use strict";
module.exports = {
  entry: "./app.js",
  mode: "production",
  output: {
    filename: "bundle.min.js", // The use of "min" is a convention to name a minimized file.
  },
  resolve: {
    modules: ["node_modules"],
  },
};
