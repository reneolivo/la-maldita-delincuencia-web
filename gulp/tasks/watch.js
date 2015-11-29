import gulp   from 'gulp';
import config from '../config';

gulp.task('watch', ['server'], () => {
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.views.index, ['views']);
  gulp.watch(config.views.src, ['views']);
  gulp.watch(config.scripts.src, ['scripts']);
});
