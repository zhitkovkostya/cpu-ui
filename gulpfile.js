const { parallel } = require("gulp");
const compileScss = require("./gulp/tasks/compile-scss");
const optimizeImages = require("./gulp/tasks/optimize-images");

console.log(compileScss);

exports.default = parallel(compileScss, optimizeImages);
