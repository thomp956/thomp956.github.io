var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('build-typescript', function() {
  var tsResult = gulp.src('./**/*.ts')
    .pipe(ts({
        declarationFiles: true,
        noExternalResolve: true,
        noImplicitAny: true,
        out: 'main.js'
      }));
 
  return tsResult.js.pipe(gulp.dest('./'));
});
 
gulp.task('watch', function () {
  gulp.watch('*.ts', ['scripts']);
});