const { src } = require("gulp");
const clean = require("gulp-clean");
const { root } = require("../config");

const cleanJs = () => {
  return src(root + "/scripts", { read: false }).pipe(clean());
};

module.exports = cleanJs;
