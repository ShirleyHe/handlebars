var gulp = require("gulp");
var plumber = require("gulp-plumber");
var config = require("../config").fonts;
var handleErrors = require("../util/handleErrors");
var livereload = require("gulp-livereload");

gulp.task("fonts", function() {
    return gulp.src(config.public)
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(gulp.dest(config.web))
            .pipe(livereload());
});