var gulp = require('gulp');
var plumber = require('gulp-plumber');
var config = require('../config').javascript;
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var livereload = require('gulp-livereload');

gulp.task('javascript', function() {
    return gulp.src(config.public)
        .pipe(plumber({
            errorHandler: handleErrors
        }))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('core.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpif(config.isCompression, uglify()))
        .pipe(gulp.dest(config.web))
        .pipe(livereload());
});