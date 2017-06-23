var gulp = require("gulp");
var gulpSequence = require("gulp-sequence");

//or gulp4.0 
//gulp.task('prod', gulp.series('clean', 'compass', gulp.parallel('image', 'style', 'html'), 'ftp'));  
//series里的任务是顺序执行的(串行执行)，parallel里的任务是同时执行的(并行执行)。

gulp.task("default", ['clean'], function(cb) {
    gulpSequence("images", "fonts", "vendor", ["html", "javascript", "compass"], cb);
});