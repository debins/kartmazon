var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    changed     = require('gulp-changed')
    imagemin    = require('gulp-imagemin'),
    stripDebug  = require('gulp-strip-debug'),
    minifyCSS   = require('gulp-minify-css'),
    minifyHTML  = require('gulp-minify-html'),
    browserify  = require('gulp-browserify');
    handlebars  = require('gulp-handlebars');
    defineModule= require('gulp-define-module');
    concat      = require('gulp-concat');
    declare     = require('gulp-declare');
    watch       = require('gulp-watch');
    paths       = {};

gulp.task('vendor',function(){
  gulp.src('app/vendor/**/*')
    .pipe(gulp.dest('./public/vendor'));
});

paths.js = 'app/js/main.js'
gulp.task('js', function () {
  gulp.src(paths.js)
    .pipe(browserify())
    .pipe(uglify({ compress: true }))
    .pipe(stripDebug())
    .pipe(gulp.dest('./public/js'));
});
gulp.task('js-dev', function () {
  return gulp.src(paths.js)
    .pipe(browserify())
    .pipe(gulp.dest('./public/js'));
});

paths.css = 'app/css/**/*.css'
gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(minifyCSS({ keepSpecialComments: '*', keepBreaks: '*'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('images', function () {
  var imgSrc = './app/img/**/*',
      imgDst = './public/img';

  gulp.src('app/img/**/*')
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

paths.html = './app/*.html'
gulp.task('html', function () {
  var htmlSrc = paths.html,
      htmlDst = './public';

  return gulp.src(htmlSrc)
  .pipe(minifyHTML())
  .pipe(gulp.dest(htmlDst));
});

gulp.task('fonts', function () {
  gulp.src('app/fonts/**')
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('data', function () {
   gulp.src('app/data.json')
    .pipe(gulp.dest('./public'));
});

paths.templates = 'app/handlebars/*.html'
gulp.task('templates', function(){
  return gulp.src([paths.templates])
    .pipe(minifyHTML())
    .pipe(handlebars())
    .pipe(defineModule('node'))
    .pipe(gulp.dest('./app/js/templates'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.templates,['templates']);
  gulp.watch(paths.css,['css']);
  gulp.watch(paths.js,['js-dev']);
});


gulp.task('default', [ 'watch','templates','js-dev','vendor', 'css', 'images', 'html', 'fonts', 'data' ]);
gulp.task('prod', [ 'templates','js','vendor', 'css', 'images', 'html', 'fonts', 'data' ]);
