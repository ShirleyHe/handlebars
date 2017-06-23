var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-scss');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var config = require('../config').compass;
var handleErrors = require('../util/handleErrors');
var livereload = require('gulp-livereload');
var	minifyCSS = require('gulp-minify-css');

gulp.task('compass', function() {
    return gulp.src(config.public)
        .pipe(plumber({
            errorHandler: handleErrors
        }))
        .pipe(sass(config.settings))
        .pipe(gulp.dest(config.web + '/tmp'))
        .pipe(concat('main.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.web))
        .pipe(livereload())
        .on('end',function() {
            gulp.src(config.web + '/tmp')
                .pipe(clean({force: true}));
            gulp.src(config.web + '/scss')
                .pipe(clean({force: true}));
            gulp.src(config.web + '/tpls')
                .pipe(clean({force: true}));
        });
});