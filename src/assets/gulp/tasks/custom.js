'use strict';

var gulp    = require('gulp');
var config  = require('../config');
var helpers = require('../helpers');

var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');

gulp.task('custom:bootstrap-font', function() {
  return gulp.src('src/assets/vendor/bootstrap-sass/assets/fonts/bootstrap/**/*')
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest('dist/assets/fonts/bootstrap'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('vendor:custom', [
  'custom:bootstrap-font'
])
