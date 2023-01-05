const { dest } = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const { buildPaths } = require("../config");

/**
 * Creates a bundle from EJS modules.
 */
const compileJs = () => {
  return browserify({
    entries: `${buildPaths.scriptsTmp}/main.js`,
  })
    .transform(
      babelify.configure({
        presets: ["@babel/preset-env"],
      })
    )
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(dest(buildPaths.root));
};

module.exports = compileJs;
