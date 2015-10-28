var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var bs           = require('browser-sync');

gulp.task('sass', function() {
  gulp.src('./src/sass/main.scss')
      .pipe(plumber())
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./assets/css/'))
      .pipe(bs.reload({ stream: true }));
});

gulp.task('js', function() {
  gulp.src('./src/js/main.js')
      .pipe(plumber())
      .pipe(uglify())
      .pipe(gulp.dest('./assets/js/'));
});

gulp.task('browser-sync', function() {
  bs({
    server: { baseDir: './' },
    port: 3000
  });
});

gulp.task('imagemin', function() {
  gulp.src('./src/img/**/*.{jpg,png,gif}')
      .pipe(plumber())
      .pipe(imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
      }))
      .pipe(gulp.dest('./assets/img/'));
});

gulp.task('watch', function () {
  gulp.watch(['./index.html','./post/index.html'], bs.reload);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js', bs.reload]);
  gulp.watch('./src/img/**/*.{jpg,png,gif}', ['imagemin']);
});

gulp.task('default', ['watch', 'browser-sync']);
