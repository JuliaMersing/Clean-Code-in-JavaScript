'use strict'
//This file contains the basic configuration of how the webpack will compile the modules
module.exports = {
    entry : "app.js", //The entry file for application, the starting point
    output : {
        filename : "bundle.js" //You can also specify a path if you want place it on a separate folder
    },
    resolve : {
        modules : [__dirname] //To specify that webpack should look for modules in the current directory
    }
}