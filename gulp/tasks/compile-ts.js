const { dest } = require("gulp");
const ts = require("gulp-typescript");
const { root } = require("../config");

var tsProject = ts.createProject("tsconfig.json");

const compileTs = () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(dest(root + "/scripts"));
};

module.exports = compileTs;
