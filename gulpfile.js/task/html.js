// Плагины
const fileInclude = require('gulp-file-include');
const plubmer = require('gulp-plumber');
const webpHtml = require('gulp-webp-html');


const html = () => {
    return $.gulp.src($.path.html.src)
    .pipe(plubmer($.app.plumber.html))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream());
}

module.exports = html;