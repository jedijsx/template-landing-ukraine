const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('src/css/*.css').on('change', browserSync.reload);
  gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

gulp.task('images', async function(){
  const imagemin = await import('gulp-imagemin');

  return gulp.src('src/images/original/*')
      .pipe(imagemin.default())
      .pipe(gulp.dest('src/images'));
});

gulp.task('default', gulp.series('browser-sync'));