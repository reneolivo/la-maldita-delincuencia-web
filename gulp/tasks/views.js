import gulp         from 'gulp';
import browserSync  from 'browser-sync';
import config       from '../config';

gulp.task('views', () => {
  gulp.src(config.views.index)
    .pipe(gulp.dest(config.build))
    .pipe(browserSync.stream({once: true}));
});
