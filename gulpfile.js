const { parallel } = require("gulp");
const compileScss = require("./gulp/tasks/compile-scss");

console.log(compileScss);

exports.default = parallel(compileScss);
