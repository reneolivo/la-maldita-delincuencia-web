export default {
  source: './app/',
  build: './build/',
  port: 8080,
  fonts: {
    src: [
      'app/fonts/**/*.*',
      'node_modules/materialize-css/font/**/*.*',
      'node_modules/font-awesome/fonts/**/*.*'
    ],
    dest: 'build/fonts/',
    destUrl: '/fonts/'
  },
  images: {
    src: 'app/images/**/*.*',
    dest: 'build/images/'
  },
  scripts: {
    src: 'app/js/main.js',
    dest: 'build/js/'
  },
  styles: {
    src: 'app/css/**/*.scss',
    dest: 'build/css/'
  },
  views: {
    index: 'app/index.html'
  }
};
