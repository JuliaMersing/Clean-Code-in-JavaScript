'use strict'

module.exports = {
    entry : "./app.js", // This path is different from the video one
    mode: "production",
    output : {
        filename : "bundle.min.js" // "bundle.min.js"
    },
    resolve: {
        modules: ['node_modules'],// This path is different from the video one
      }
}