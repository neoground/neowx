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
        /** jQuery */
        "src/js/jquery-3.2.1.min.js",
        /** Kube */
        "src/js/lib/kube.min.js",
        /** Fancybox */
        "src/css/fancybox/jquery.fancybox.js",
        /** Page scripts */
        "src/js/main.js"
    ],

    /** @type {Array} CSS source files to concatenate and minify */
    cssminSrc = [
        /** Kube */
        "src/css/kube/kube.css",
        /** Fancybox */
        "src/css/fancybox/jquery.fancybox.css",
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
gulp.task("styles", gulp.series('sass', function() {
    return gulp.src(cssminSrc)
        .pipe($.concat("style.css"))
        .pipe($.cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest("src"));
}));

/** Uglify */
gulp.task("uglify", function () {
    return gulp.src(uglifySrc)
        .pipe($.concat("main.min.js"))
        .pipe($.uglify())
        .pipe(gulp.dest("src"));
});

/** Clean job */
gulp.task('clean', function() {
    // Clean dist dir
    process.stdout.write("Cleaning dist directory" + '\n');
    return gulp.src('dist', {read: false}).pipe($.clean({allowEmpty: true}));
});

/** Build job */
gulp.task('build', gulp.series('clean', 'styles', 'uglify', function () {
    // Copy img / NOAA / weather-icons dirs
    process.stdout.write("Copying img / NOAA / weather-icons" + '\n');
    gulp.src('src/img/**/*', {base:'src/'}).pipe(gulp.dest("dist/"));
    gulp.src('src/NOAA/*', {base:'src/'}).pipe(gulp.dest("dist/"));
    gulp.src('src/weather-icons/**/*', {base:'src/'}).pipe(gulp.dest("dist/"));

    process.stdout.write("Copying config and style" + '\n');
    gulp.src('src/*.{conf,css,js,json,tmpl}', {base:'src/'}).pipe(gulp.dest("dist/"));

    // Copy base files with new file extension
    process.stdout.write("Copying base files" + '\n');
    return gulp.src('src/*.html', {base:'src/'})
        .pipe($.rename({extname: ".html.tmpl"}))
        .pipe(gulp.dest("dist/"));
}));

/** Watch task */
gulp.task("watch", gulp.series('styles', 'uglify', function () {
    /** Watch for CSS */
    gulp.watch([
        "src/css/scss/**/*.scss"
    ], ["styles"]);

    /** Watch for JS */
    gulp.watch(["src/js/{!(lib)/*.js,*.js}", "!src/main.min.js"], ["uglify"]);
}));

/** Gulp default task */
gulp.task("default", gulp.series('watch'));
