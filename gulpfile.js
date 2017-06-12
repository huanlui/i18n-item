var gulp = require('gulp');
var inlineResources = require('./scripts/gulp/inline-resources');
var sass = require('gulp-sass');


gulp.task('copy-and-inline-resource', copyHtml);

function copyHtml() {
    gulp.src('src/modules/**/*.html')
        .pipe(gulp.dest('./dist/modules')).on('end', copyAssets);
}

function copyAssets () {
    gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets')).on('end', copyScss);
}
function copyScss () {
    gulp.src('./src/modules/**/*.scss')
        .pipe(gulp.dest('./dist/modules')).on('end', inlineResource);
}

function inlineResource() {
    inlineResources('./dist/modules');
}

gulp.task('default', ['copy-and-inline-resource']);