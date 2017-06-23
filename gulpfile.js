var requireDir = require("require-dir");

requireDir("./gulp/tasks", { recurse: true });

// var gulp = require("gulp");
// var gulpSequence = require("gulp-sequence");    // 顺序执行任务(插件)
// var gulpSequence = require('gulp-sequence').use(gulp);

// gulp.task("a", function(cb) {
//     var str = "111";
//     cb();
// });
// gulp.task("b", function(cb) {
//     console.log(str);
//     cb();
// });
// gulp.task("c", function(cb) {
//     console.log("c");
//     cb();
// });
// gulp.task("d", function(cb) {
//     console.log("d");
//     cb();
// });
// gulp.task("e", function(cb) {
//     console.log("e");
//     cb();
// });
// gulp.task("f", function() {
//     // console.log("f");
//     return gulp.src("*.js");
// });

// gulp.task("sequence-1", gulpSequence(['a','b'],'c',['d','e'],'f'));
// gulp.task("sequence-2", function(cb) {
//     gulpSequence(['a','b'],'c',['d','e'],'f',cb);
// });
// gulp.task("sequence-3", function(cb) {
//     gulpSequence(['a','b'],'c',['d','e'],'f')(cb);
// });

// gulp.task('gulp-sequence', gulpSequence('sequence-1', 'sequence-2', 'sequence-3'));
// gulp.watch('src/**/*.js', function (event) {
//   gulpSequence('a', 'b')(function (err) {
//     if (err) console.log(err)
//   })
// });
 
// gulp.task('test', gulpSequence(['a', 'b'], 'c', ['d', 'e'], 'f'));