const { parallel } = require("gulp");
const compileJs = require("./gulp/tasks/compile-js");
const compileScss = require("./gulp/tasks/compile-scss");
const copyFonts = require("./gulp/tasks/copy-fonts");
const dev = require("./gulp/tasks/dev");

exports.default = parallel(compileScss, compileJs, copyFonts);
exports.dev = dev;
