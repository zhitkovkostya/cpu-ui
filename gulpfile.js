const { parallel } = require("gulp");
const compileScss = require("./gulp/tasks/compile-scss");
const copyFonts = require("./gulp/tasks/copy-fonts");
const dev = require("./gulp/tasks/dev");

exports.default = parallel(compileScss, copyFonts);
exports.dev = dev;
