const { series, watch } = require("gulp");
const compileJs = require("./compile-js");
const compileTs = require("./compile-ts");
const compileScss = require("./compile-scss");
const cleanJs = require("./clean-js");

/**
 * Runs in background waiting for file changes to run specific tasks
 */
const watchers = () => {
  watch("src/styles/**/*.scss", compileScss);
  watch("src/scripts/**/*.ts", series(compileTs, compileJs, cleanJs));
};

module.exports = watchers;
