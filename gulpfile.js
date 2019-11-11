const fs = require('fs')
const gulp = require('gulp');
const ejs = require('ejs');
const gulpConcat = require('gulp-concat');
const gulpClean = require('gulp-clean');
const gulpSass = require('gulp-sass')
const gulpWatch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const gulpConnect = require('gulp-connect');

const gulpEjs = require('gulp-ejs')
const gulpRename = require('gulp-rename')



const paths = {
  sass: {
    src: [
      './src/sass/*.scss'
    ],
    dest: './temp/css/'
  },
  css: {
    src: [
      './node_modules/@fortawesome/fontawesome-free/css/all.css',
      './node_modules/jquery-ui-dist/jquery-ui.min.css',
      './temp/css/*.css',
    ],
    dest: './public/css/'
  },
  scripts: {
    src: [
      './src/js/**/*.js'
    ],
    dest: './public/js/'
  },
  jsLib: {
    src: [
      './src/lib/*.js',
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/jquery-ui-dist/jquery-ui.min.js'
    ],
    dest: './public/js/'
  },
  template: {
    xml: './templates/*.xml',
    src: './src/index.ejs',
    dest: './public/'
  },
  media: {
    src: [
      './src/media/*',
    ],
    dest: './public/media'
  },
  webfonts: {
    src: [
      './node_modules/@fortawesome/fontawesome-free/webfonts/*'
    ],
    dest: './public/webfonts/'
  },
  jsx: {
    src: [
      './src/jsx/index.jsx'
    ],
    dest: './public/jsx'
  }
}


function compileSass() {
  // out put style default is 'nested'
  sassParams = {
    // outputStyle: 'nested'
    // outputStyle: 'expanded'
    // outputStyle: 'compact'
    outputStyle: 'compressed'
  }
  return gulp.src(paths.sass.src)
    .pipe(gulpSass.sync(sassParams).on('error', gulpSass.logError))
    .pipe(gulp.dest(paths.sass.dest))
}


function concatJs() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(gulpConcat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(gulpConnect.reload());
}

function concatJsLib() {
  return gulp.src(paths.jsLib.src)
    // .pipe(sourcemaps.init())
    .pipe(gulpConcat('lib.js'))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.jsLib.dest));
}

function concatCss() {
  return gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(gulpConcat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css.dest))
    .pipe(gulpConnect.reload());
}

function copy() {
  gulp.src(paths.jsx.src)
  .pipe(gulp.dest(paths.jsx.dest))

  gulp.src(paths.webfonts.src)
  .pipe(gulp.dest(paths.webfonts.dest))


  return gulp.src(paths.media.src)
  .pipe(gulp.dest(paths.media.dest))
  .pipe(gulpConnect.reload())
}


function buildHtml() {
  // data = {
  //   'xmlToolbox': fs.readFileSync(paths.template.xml, 'utf-8'),
  // }
  return gulp.src(paths.template.src)
    // .pipe(gulpEjs(data))
    .pipe(gulpRename({extname: '.html'}))
    .pipe(gulp.dest(paths.template.dest))
    .pipe(gulpConnect.reload());
}

function clean () {
  return gulp.src(['./temp', paths.scripts.dest, paths.css.dest], {read: false})
    .pipe(gulpClean());
}

const css = gulp.series(compileSass, concatCss)

function serverConnect() {
  gulpConnect.server({
        root: 'public',
        port: 8080,
        livereload: true
      });
}

function watch() {
  gulp.watch(paths.jsx.src, gulp.series(copy));
  gulp.watch(paths.scripts.src, gulp.series(concatJs));
  gulp.watch(paths.template.src, gulp.series(buildHtml));
  gulp.watch(paths.template.xml, gulp.series(buildHtml));
  gulp.watch(paths.sass.src, gulp.series(css));
}




exports.buildHtml = buildHtml
exports.watch = watch
exports.clean = clean
exports.concatJs = concatJs
exports.concatJsLib = concatJsLib
exports.css = css
exports.copy = copy
// exports.default = gulp.series(copy, concatJsLib, gulp.parallel(concatJs, css))
exports.dev = gulp.series(copy, buildHtml, concatJsLib, gulp.parallel(concatJs, css), gulp.parallel(serverConnect, watch))

