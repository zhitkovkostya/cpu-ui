const { dest } = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const { root } = require("../config");

/**
 *
 */
const compileJs = () => {
  browserify({
    entries: "./dist/scripts/main.js",
  })
    .transform(
      babelify.configure({
        presets: ["@babel/preset-env"],
      })
    )
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(dest(root));
};

module.exports = compileJs;
