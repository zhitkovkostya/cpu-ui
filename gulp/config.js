const buildRoot = "dist";
const sourceRoot = "src";

module.exports = {
  buildPaths: {
    root: buildRoot,
    fonts: `${buildRoot}/assets/fonts`,
    scriptsTmp: `${buildRoot}/scripts`,
  },
  sourcePaths: {
    allFonts: `${sourceRoot}/assets/fonts/**`,
    allScripts: `${sourceRoot}/scripts/**/*.ts`,
    allStyles: `${sourceRoot}/styles/**/*.scss`,
    styles: `${sourceRoot}/styles/main.scss`,
  },
};
