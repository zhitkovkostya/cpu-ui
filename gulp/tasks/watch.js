const { series, watch } = require("gulp");
const { sourcePaths } = require("../config");
const compileJs = require("./compile-js");
const compileTs = require("./compile-ts");
const compileScss = require("./compile-scss");
const cleanJs = require("./clean-js");

/**
 * Runs in background waiting for file changes to run specific tasks
 */
const watchers = () => {
  watch(sourcePaths.allStyles, compileScss);
  watch(sourcePaths.allScripts, series(compileTs, compileJs, cleanJs));
};

module.exports = watchers;
