const path = require("path");

module.exports = {
entry: "./SRC/index.js",
output:{
    path: path.resolve(".", "build"),
    filename: "bundle.js"
},
mode: "development",

};