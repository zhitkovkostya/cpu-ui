const { dest, src } = require("gulp");
const { sourcePaths, buildPaths } = require("../config");

/**
 * Moves font files to dist
 */
const copyFonts = () => {
  return src(sourcePaths.allFonts).pipe(dest(buildPaths.fonts));
};

module.exports = copyFonts;
