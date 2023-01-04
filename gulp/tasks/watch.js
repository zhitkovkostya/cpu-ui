const { watch } = require("gulp");
const compileJs = require("./compile-js");
const compileScss = require("./compile-scss");

/**
 * Runs in background waiting for file changes to run specific tasks
 */
const watchers = () => {
  watch("src/styles/**/*.scss", compileScss);
  watch("src/scripts/**/*.js", compileJs);
};

module.exports = watchers;
