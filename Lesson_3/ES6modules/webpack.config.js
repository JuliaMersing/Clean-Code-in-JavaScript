module.exports = {
    entry : "app.js", 
    output : {
        filename : "bundle.js"
    },
    resolve : {
        modules : [__dirname] 
    }
}