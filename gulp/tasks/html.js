var gulp = require("gulp");
var plumber = require("gulp-plumber");
var config = require("../config").html;
var uglify = require("gulp-uglify");
var handleErrors = require("../util/handleErrors");
var livereload = require("gulp-livereload");
var htmlmin = require("gulp-htmlmin");
var gulpif = require("gulp-if");

gulp.task("html", function() {
    return gulp.src(config.public)
            .pipe(plumber({
                errorHandler: handleErrors
            }))
            .pipe(gulpif(config.isCompression, htmlmin({
                removeComments: true,       // 清除HTML注释
                collapseWhitespace: true,   // 压缩HTML
                collapseBooleanAttributes: true,    // 省略布尔属性的值 <input checked="true" /> ==> <input />
                removeEmptyAttributes: true,        // 删除所有空格作属性的值 <input id="" /> ==> <input />
                removeScriptTypeAttributes: true,   // 删除<script>的type="text/javascript"
                removeStyleLinkAtttributes: true,   // 删除<style>和<link>的type="text/css"
                minifyJS: true,                     // 压缩页面JS
                minifyCSS: true                     // 压缩页面CSS
            })))
            .pipe(gulp.dest(config.web))
            .pipe(livereload());
})