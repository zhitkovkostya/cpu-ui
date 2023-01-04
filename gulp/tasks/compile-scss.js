const { dest, src } = require("gulp");
const config = require("../config");
const sass = require("gulp-sass")(require("sass"));

/**
 * Compiles SCSS to CSS
 */
const compileScss = () => {
  return src("src/styles/main.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(dest(config.root));
};

module.exports = compileScss;
