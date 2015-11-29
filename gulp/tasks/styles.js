import path         from 'path';
import gulp         from 'gulp';
import sass         from 'gulp-sass';
import rework       from 'gulp-rework';
import rURL         from 'rework-plugin-url';
import browserSync  from 'browser-sync';
import config       from '../config';

const FONT_EXTS  = ['.ttf', '.eot', '.woff', '.woff2', '.svg'];
const EXT_REG    = /^[^.]+(\.[A-z0-9]+)/;

gulp.task('styles', () => {
  gulp.src(config.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(rework(rURL(function(url) {
      var fileData = path.parse(url);
      var ext = fileData.base.match(EXT_REG);

      if (FONT_EXTS.indexOf(ext[1]) === -1)
        return url;

      return config.fonts.destUrl + fileData.base;
    })))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({once: true}));
});
