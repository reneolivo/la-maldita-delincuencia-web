export default {
  source: './app/',
  build: './build/',
  port: 8080,
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
  },
  fonts: {
    src: [
      'node_modules/materialize-css/font/**/*.*'
    ],
    dest: 'build/fonts/',
    destUrl: '/fonts/'
  }
};
