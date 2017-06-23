var path = require("path");
var argv = require("yargs").argv;

var public = "public";          // 编译目录
var web = "./web";              // 开发环境输出目录
var test = "./web";             // 开发环境输出目录
var webs = "./web";             // 生产环境处处目录
var isCompression = false;      // 是否压缩

// js编译文件集
var jsPublic = [public + "/lib/init.js", public + "/lib/config/api.js", "!" + public + "/lib/config/pApi.js", 
                public + "/lib/**/*.js", public + "/tpls/**/*.js"];

if(argv.p) {
    jsPublic = [public + "/lib/init.js", "!" + public + "/lib/config/api.js", public + "/lib/config/pApi.js",
                public + "/lib/**/*.js", public + "/tpls/**/*.js"];
    web = webs;
}

if(argv.c) {
    isCompression = true;
}

var config = {
    clean: {
        public: [web + "/"]
    },
    html: {
        public: [public + "/**/*.html", "!" + public + "vendor/**/*.html"],
        web: web + "/",
        isCompression: isCompression
    },
    compass: {
        public: [public + "/scss/**/*.scss", public + "/tpls/**/*.scss"],
        web: web + "/css",
        settings:{
            config_file: "./config.rb",
            project: path.join(__dirname, "../"),
            http_path: "/",
            sass: public,
            css: web + "/css",
            images: "/images",
            font: "/font",
            style: "compressed"
        }
    },
    images: {
        public: public + "/images/*/*",
        web: web + "/images",
        isCompression: isCompression,
        settings: {
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }
    },
    javascript: {
        isCompression: isCompression,
        public: jsPublic,
        web: web + "/js"
    },
    fonts: {
        public: public + "/fonts/**/*",
        web: web + "/fonts"
    },
    vendor: {
        public: public + "/vendor/**/*",
        web: web + "/lib"
    }
}

module.exports = config;