'use strict'

module.exports = {
    entry : "./app.js", // This path is different from the video one
    mode: "development",
    output : {
        filename : "bundle.js"
    },
    resolve: {
        modules: ['node_modules'],// This path is different from the video one
      }
}