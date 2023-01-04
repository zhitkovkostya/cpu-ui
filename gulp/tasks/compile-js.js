const { dest, src } = require("gulp");
const babel = require("gulp-babel");
const { root } = require("../config");

const compileJs = () => {
  return src("src/scripts/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(dest(root));
};

module.exports = compileJs;
