const { parallel } = require("gulp");

const compileScss = (done) => {
  console.log("Compile SCSS to CSS");

  done();
};

const optimizeImages = (done) => {
  console.log("Optimize Images");

  done();
};

exports.default = parallel(compileScss, optimizeImages);
