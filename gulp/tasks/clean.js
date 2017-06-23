var gulp = require("gulp");
var clean = require("gulp-clean");
var config = require("../config").clean;

gulp.task("clean", function() {
    if(config.public == "/") {
        console.log("清除目录为空！");
        return false;
    }

    return gulp.src(config.public, {
        read: false
    }).pipe(clean({force: true}));
});