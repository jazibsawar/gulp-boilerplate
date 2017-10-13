import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import changed from 'gulp-changed';
import pngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminGifsicle from 'imagemin-gifsicle';
import BrowserSync from 'browser-sync';
import order from 'gulp-order';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

const browserSync = BrowserSync.create();

// Configuration
var configuration = {
  paths: {
    src: {
      images: './src/images/**/*',
      html: './src/**/*.html',
      sass: './src/sass/**/*.scss',
      js: './src/js/**/*.js'
    },
    dist: {
      images: './dist/images/',
      html: './dist/',
      css: './dist/css/',
      js: './dist/js/'
    },
    maps: './maps/'
  },
  jsFile: 'app.js',
  jsOrder: [
    'a.js',
    'b.js'
  ]
};


// Compile scss and minify
gulp.task('scss', () => (
  gulp.src(configuration.paths.src.sass)
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(sourcemaps.write(configuration.paths.maps))
  .pipe(gulp.dest(configuration.paths.dist.css))
  .pipe(browserSync.stream())
));

// Compile Javascript
gulp.task('js', () => (
  gulp.src(configuration.paths.src.js)
  .pipe(order(configuration.jsOrder))
  .pipe(sourcemaps.init())
  .pipe(concat(configuration.jsFile))
  .pipe(uglify())
  .pipe(sourcemaps.write(configuration.paths.maps))
  .pipe(gulp.dest(configuration.paths.dist.js))
  .pipe(browserSync.stream())
));

// Optimize Images

gulp.task('imagemin', () => (
  gulp.src(configuration.paths.src.images)
  .pipe(changed(configuration.paths.dist.images))
  .pipe(imagemin({
    progressive: true,
    verbose: true,
    svgoPlugins: [{
      removeViewBox: true
    }],
    use: [pngquant(), imageminMozjpeg(), imageminGifsicle()]
  }))
  .pipe(gulp.dest(configuration.paths.dist.images))
  .pipe(browserSync.stream())
));

// Optimize HTML
gulp.task('html', () => (
  gulp.src(configuration.paths.src.html)
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest(configuration.paths.dist.html))
  .pipe(browserSync.stream())
));


// Build/production tasks
gulp.task('build', ['imagemin', 'scss', 'js', 'html']);

// Build/development tasks
gulp.task('default', ['imagemin', 'scss', 'js', 'html'], () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch(configuration.paths.src.images, ['imagemin']);
  gulp.watch(configuration.paths.src.js, ['js']);
  gulp.watch(configuration.paths.src.sass, ['scss']);
  gulp.watch(configuration.paths.src.html, ['html']);
});
