import gulp           from 'gulp';
import browserSync    from 'browser-sync';
import templateCache  from 'gulp-angular-templatecache';
import config         from '../config';

gulp.task('views', () => {
  gulp.src(config.views.index)
    .pipe(gulp.dest(config.build))
    .pipe(browserSync.stream({once: true}));

  return gulp.src(config.views.src)
    .pipe(templateCache({
      root: '/views/',
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream({ once: true }));
});
