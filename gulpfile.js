'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');



gulp.task('styles', function() {
      return gulp.src('main.scss')
        .pipe(sass({})
        .pipe(rename("main.css"))
        .on('error', sass.logError))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['styles'], function() {
    gulp.watch('main.scss', ['styles']);
    gulp.watch('main.js').on('change', browserSync.reload);
    gulp.watch('index.html').on('change', browserSync.reload);
    gulp.watch('main.css').on('change', browserSync.reload);
    browserSync.init({
        server: '.'
    });
});
