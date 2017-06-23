var gulp = require("gulp");
var plumber = require("gulp-plumber");
var config = require("../config").images;
var imagemin = require("gulp-imagemin");
var handleErrors = require("../util/handleErrors");
var gulpif = require("gulp-if");


gulp.task('images', function() {
    console.log(config.public);
    return gulp.src(config.public)
    .pipe(plumber({
        errorHandler: handleErrors
    }))
    .pipe(gulpif(config.isCompression, imagemin(config.settings)))
    .pipe(gulp.dest(config.web));
});