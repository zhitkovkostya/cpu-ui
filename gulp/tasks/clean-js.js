const { src } = require("gulp");
const clean = require("gulp-clean");
const { buildPaths } = require("../config");

/**
 * Removes a temporary folder created during the build time
 * @returns {Function}
 */
const cleanJs = () => {
  return src(buildPaths.scriptsTmp, { read: false }).pipe(clean());
};

module.exports = cleanJs;
