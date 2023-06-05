// const gulp = require('gulp');
// const sass = require('gulp-sass');

// sass.complier = require('node-sass');

// const sasss = () => gulp
//   .src('./src/scss/**/*.scss')
//   .pipe(sass().on('error', sass.logError))
//   .pipe(gulp.dest('./src/css'));

// gulp.task('sass:watch', () => {
//   gulp.watch('./src/scss/**/*.scss', ['sass'])
// })

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
};