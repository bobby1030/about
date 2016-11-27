const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('./style/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
})

gulp.task('sass', function() {
    return gulp.src('./style/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', swallowError)
        .pipe(gulp.dest('./style'))
})

gulp.task('default', ['serve'])