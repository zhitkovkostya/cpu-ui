const { parallel, series } = require("gulp");
const compileJs = require("./gulp/tasks/compile-js");
const compileTs = require("./gulp/tasks/compile-ts");
const compileScss = require("./gulp/tasks/compile-scss");
const copyFonts = require("./gulp/tasks/copy-fonts");
const dev = require("./gulp/tasks/dev");
const cleanJs = require("./gulp/tasks/clean-js");

exports.default = parallel(
  compileScss,
  series(compileTs, compileJs, cleanJs),
  copyFonts
);
exports.dev = dev;
