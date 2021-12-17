'use strict'

const path = require('path');

module.exports = {
    entry : "./app.js", // This path is different from the video one
    mode: "development",
    output : {
        filename : "bundle.js"
    },
    resolve: {
        modules: ['node_modules'],// This path is different from the video one
        extensions: ['', '.js', '.jsx', '.css']
      },
      devServer: {
        hot: true, 
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8080,
      },
}