const { parallel } = require("gulp");
const compileJs = require("./compile-js");
const compileScss = require("./compile-scss");
const copyFonts = require("./copy-fonts");
const watchers = require("./watch");

module.exports = parallel(watchers, copyFonts, compileScss, compileJs);
