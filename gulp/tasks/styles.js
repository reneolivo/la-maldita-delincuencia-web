import gulp        from 'gulp';
import sass        from 'gulp-sass';
import browserSync from 'browser-sync';
import config      from '../config';

gulp.task('styles', () => {
  gulp.src(config.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({once: true}));
});
