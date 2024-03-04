const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssvariables = require("postcss-css-variables");
const cssImport = require("postcss-import");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

/* compile css into one file with hard coded values, 
runs autoprefixer to add browser specific prefixes */
gulp.task("css", function () {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([cssImport, cssvariables, autoprefixer]))
    .pipe(rename("made.css"))
    .pipe(gulp.dest("dist/3.0.0/"));
});


/* compile css into one file with CSS variables values */
gulp.task("css-vars", function () {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([cssImport, autoprefixer]))
    .pipe(rename("made-css-variables.css"))
    .pipe(gulp.dest("dist/3.0.0/"));
});

/* compile css into one minified file with hard coded values */
gulp.task("css-min", function () {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([cssImport, cssvariables, autoprefixer]))
    .pipe(cleanCSS({ compatibility: "ie11" }))
    .pipe(rename("made.min.css"))
    .pipe(gulp.dest("dist/3.0.0/"));
});

/* compile css into one minified file with CSS variables values */
gulp.task("css-vars-min", function () {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([cssImport, autoprefixer]))
    .pipe(cleanCSS({ compatibility: "ie11" }))
    .pipe(rename("made-css-variables.min.css"))
    .pipe(gulp.dest("dist/3.0.0/"));
});

/* copy css from src file to dist folder */
/*gulp.task("copy-src", function () {
  return gulp
    .src(["src/**"], { base: "./" })
    .pipe(gulp.dest("./dist/"));
});*/

/* copy latest version into root of dist so its available when npm@latest is run, 
projects importing the files then won't need to specify a version number  */
gulp.task("copy-latest-to-root", function () {
  return gulp
    .src(["dist/3.0.0/**"])
    .pipe(gulp.dest("./dist/"));
});

/* run all of the tasks */
gulp.task('default', gulp.series("css", "css-min", "css-vars", "css-vars-min", "copy-latest-to-root"));