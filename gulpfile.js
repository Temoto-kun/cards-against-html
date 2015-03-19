/*global require*/
/*global console*/

(function(require, console, undefined) {

    "use strict";

    var gulp = require("gulp");

    gulp.task("styles", function() {
        var utils = {
            compile: require("gulp-sass"),
            compress: require("gulp-uglifycss")
        };

        gulp.src("style.sass")
            .pipe(utils.compile({ indentedSyntax: true }))
            .pipe(gulp.dest("."));
    });

    gulp.task("scripts", function() {
        var utils = {
            compress: require("gulp-uglify"),
            concat: require("gulp-concat")
        };

        gulp.src([
            "lib/jquery/dist/jquery.js",
            "lib/bootstrap-sass/assets/javascripts/bootstrap.js",
            "lib/angular/angular.js",
            "lib/angular-sanitize/angular-sanitize.js",
            "lib/angular-bootstrap/ui-bootstrap-tpls.js",
            "lib/lodash/lodash.js",
            "lib/remarkable/dist/remarkable.js",
            "app/js/angular/app-pre.js",
            "app/js/angular/services/**/*.js",
            "app/js/angular/controllers/**/*.js",
            "app/js/angular/directives/**/*.js",
            "app/js/angular/config/*.js",
            "app/js/angular/app-post.js"
        ])
            .pipe(utils.concat("script.js"))
            .pipe(gulp.dest("."));
    });

    gulp.task("test", function() {
        var utils = {
            test: require("gulp-protractor")
        };

        gulp.src([
            "app/tests/**/*.js"
        ])
            .pipe(utils.test.protractor({
                configFile: "test/protractor.config.js",
                args: ['--baseUrl', 'http://127.0.0.1:8000']
            }))
            .on("error", function() {
                console.log(":P");
            });
    });

    gulp.task("default", ["styles", "scripts"]);

})(require, console);
