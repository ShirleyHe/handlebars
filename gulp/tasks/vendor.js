var gulp = require("gulp");
var plumber = require("gulp-plumber");
var config = require("../config").vendor;
var handleErrors = require("../util/handleErrors");
var livereload = require("gulp-livereload");

gulp.task("vendor", function() {
    return gulp.src(config.public)
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(gulp.dest(config.web))
            .pipe(livereload());
});