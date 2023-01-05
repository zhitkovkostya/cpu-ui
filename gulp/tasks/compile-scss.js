const { dest, src } = require("gulp");
const { buildPaths, sourcePaths } = require("../config");
const sass = require("gulp-sass")(require("sass"));

/**
 * Compiles SCSS to CSS
 */
const compileScss = () => {
  return src(sourcePaths.styles)
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(dest(buildPaths.root));
};

module.exports = compileScss;
