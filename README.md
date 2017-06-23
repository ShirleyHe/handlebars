# handlebars
第一次使用模板引擎搭建nodeJs项目

# gulp入门
1. 通过 npm install -g gulp 全局安装gulp(自动化构建工具)
2. 通过 npm install --save-dev gulp 作为项目的开发依赖(devDependencies)安装
3. 在根项目根目录下创建一个名为 gulpfile.js 的文件
    var gulp = require("gulp");

    gulp.task("default", function() {
        some code···
        // 默认的任务代码
    })

4. 运行gulp  ==>  $ gulp

# gulp的方法
1. gulp.src()

