const { watch } = require("gulp");
const compileScss = require("./compile-scss");

/**
 * Runs in background waiting for file changes to run specific tasks
 */
const watchers = () => {
  watch("src/styles/**/*.scss", compileScss);
};

module.exports = watchers;
