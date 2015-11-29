import gulp         from 'gulp';
import flatten      from 'gulp-flatten';
import browserSync  from 'browser-sync';
import config       from '../config';

gulp.task('fonts', () => {
  gulp.src(config.fonts.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream({ once: true }));
});
