const { dest } = require("gulp");
const ts = require("gulp-typescript");
const { buildPaths } = require("../config");

var tsProject = ts.createProject("tsconfig.json");

const compileTs = () => {
  return tsProject.src().pipe(tsProject()).js.pipe(dest(buildPaths.scriptsTmp));
};

module.exports = compileTs;
