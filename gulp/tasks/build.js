import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], (cb) => {
  runSequence(['styles', 'fonts', 'views', 'scripts'], cb);
});
