const { dest, src } = require("gulp");
const config = require("../config");

/**
 * Moves font files to dist
 */
const copyFonts = () => {
  return src("src/assets/fonts/**").pipe(dest(config.root + "/assets/fonts"));
};

module.exports = copyFonts;
