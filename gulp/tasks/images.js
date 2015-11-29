import gulp         from 'gulp';
import browserSync  from 'browser-sync';
import config       from '../config';

gulp.task('images', () => {
  gulp.src(config.images.src)
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream({ once: true }));
});
