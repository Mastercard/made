const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssvariables = require("postcss-css-variables");
const cssImport = require("postcss-import");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

gulp.task("css", async function () {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([cssImport, cssvariables, autoprefixer]))
    .pipe(rename("made.css"))
    .pipe(gulp.dest("dist/1.2.1/"));
});

gulp.task("css-vars", async function () {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([cssImport, autoprefixer]))
    .pipe(rename("made-css-variables.css"))
    .pipe(gulp.dest("dist/1.2.1/"));
});


gulp.task("css-min", async function () {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([cssImport, cssvariables, autoprefixer]))
    .pipe(cleanCSS({ compatibility: "ie11" }))
    .pipe(rename("made.min.css"))
    .pipe(gulp.dest("dist/1.2.1/"));
});

gulp.task("css-vars-min", async function () {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([cssImport, autoprefixer]))
    .pipe(cleanCSS({ compatibility: "ie11" }))
    .pipe(rename("made-css-variables.min.css"))
    .pipe(gulp.dest("dist/1.2.1/"));
});

gulp.task("copy-src", function () {
  return gulp
    .src(["src/**"], { base: "./" })
    .pipe(gulp.dest("./dist/1.2.1/"));
});

gulp.task("default", gulp.parallel("css", "css-min", "css-vars", "css-vars-min", "copy-src"));
