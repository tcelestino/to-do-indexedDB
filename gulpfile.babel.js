'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import connect from 'gulp-connect';

gulp.task('connect', function (){
  connect.server({
    root: 'src',
    port: 8180,
    livereload: true
  });
});

gulp.task('html', () => gulp.src('src/*.html').pipe(connect.reload()));

gulp.task('js', function() {
  return gulp.src('src/js/app.js')
    .pipe(connect.reload())
    .pipe(babel())
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
  gulp.watch(['src/*.html', 'src/js/app.js'], ['html', 'js']);
});

gulp.task('default', ['connect', 'watch']);
