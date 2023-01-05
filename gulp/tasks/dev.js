const { parallel, series } = require("gulp");
const cleanJs = require("./clean-js");
const compileJs = require("./compile-js");
const compileTs = require("./compile-ts");
const compileScss = require("./compile-scss");
const copyFonts = require("./copy-fonts");
const watchers = require("./watch");

module.exports = parallel(
  watchers,
  copyFonts,
  compileScss,
  series(compileTs, compileJs, cleanJs)
);
