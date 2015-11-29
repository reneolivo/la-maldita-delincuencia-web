import gulp         from 'gulp';
import config       from '../config';
import runSequence  from 'run-sequence';

gulp.task('watch', ['server'], () => {
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.views.index, ['views']);
  gulp.watch(config.views.src, () => {
    runSequence('views', 'scripts');
  });
  gulp.watch(config.scripts.watch, ['scripts']);
});
