import gulp        from 'gulp';
import browserSync from 'browser-sync';
import config      from '../config';

gulp.task('server', ['build'], () => {
  browserSync.init({
    port: config.port,
    open: false,
    server: {
      baseDir: config.build,
    }
  });
});
