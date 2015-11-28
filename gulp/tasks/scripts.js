import gulp        from 'gulp';
import browserify  from 'gulp-browserify';
import browserSync from 'browser-sync';
import config      from '../config';

gulp.task('scripts', () => {
  gulp.src(config.scripts.src)
    .pipe(browserify())
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.stream({once: true}));
});
