/* jshint node: true */
/* global $: true */
"use strict";

var gulp = require("gulp"),
    /** @type {Object} Loader of Gulp plugins from `package.json` */
    $ = require("gulp-load-plugins")(),

    /** @type {Array} JS source files to concatenate and uglify */
    uglifySrc = [
        /** Modernizr */
        "src/js/lib/modernizr.min.js",
        /** Kube */
        "src/js/lib/kube.min.js",
        /** Page scripts */
        "src/js/main.js"
    ],

    /** @type {Array} CSS source files to concatenate and minify */
    cssminSrc = [
        /** Kube */
        "src/css/kube/kube.min.css",
        /** Theme style */
        "src/css/main.css"
    ];

/** CSS Preprocessors */
gulp.task("sass", function () {
    return gulp.src("src/css/scss/main.scss")
        .pipe($.sass({
            //style: "compressed",
            style: "expanded",
            precision: 10
        }))
        .on("error", function (e) {
            console.error(e);
        })
        .pipe(gulp.dest("src/css"));
});

/** STYLES */
gulp.task("styles", ["sass"], function () {
    var stream = gulp.src(cssminSrc)
        .pipe($.concat("style.css"))
        .pipe($.autoprefixer("last 2 version"));

    return stream.on("error", function (e) {
        console.error(e);
    })
        .pipe($.cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"));
});

/** Uglify */
gulp.task("uglify", function () {
    return gulp.src(uglifySrc)
        .pipe($.concat("main.min.js"))
        .pipe($.uglify())
        .pipe(gulp.dest("src/js"));
});

/** Build job */
gulp.task('build', function () {
    // TODO
    return gulp.src('src/')
        .pipe(gulp.dest("dist/"));
});

/** Watch task */
gulp.task("watch", ["styles", "uglify"], function () {
    /** Watch for CSS */
    gulp.watch([
        "src/css/scss/**/*.scss"
    ], ["styles"]);

    /** Watch for JS */
    gulp.watch(["src/js/{!(lib)/*.js,*.js}", "!src/js/main.min.js"], ["uglify"]);
});

/** Gulp default task */
gulp.task("default", ["watch"]);
