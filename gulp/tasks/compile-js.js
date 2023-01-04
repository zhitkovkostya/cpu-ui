const { dest, src } = require("gulp");
const { root } = require("../config");

const compileJs = () => {
  src("src/scripts/**/*.js").pipe(dest(root));
};

module.exports = compileJs;
