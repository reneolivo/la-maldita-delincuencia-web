import gulp   from 'gulp';
import config from '../config';

gulp.task('watch', ['server'], () => {
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.views.index, ['views']);
  gulp.watch(config.scripts.src, ['scripts']);
});
