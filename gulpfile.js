var gulp = require('gulp');
var shell = require('gulp-shell');
var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('bower_components/'));
});

gulp.task('run', ['bower'], shell.task([
    'npm run run'
]));

gulp.task('osx', ['bower'], shell.task([
    'npm run osx'
]));

gulp.task('linux', ['bower'], shell.task([
    'npm run linux'
]));

gulp.task('win', ['bower'], shell.task([
    'npm run win'
]));

