const { parallel } = require("gulp");
const compileScss = require("./gulp/tasks/compile-scss");
const copyFonts = require("./gulp/tasks/copy-fonts");

exports.default = parallel(compileScss, copyFonts);
