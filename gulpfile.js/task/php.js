// Плагины
const fileInclude = require('gulp-file-include');
const plubmer = require('gulp-plumber');
const webpHtml = require('gulp-webp-html');


const php = () => {
    return $.gulp.src($.path.php.src)
    .pipe(plubmer($.app.plumber.php))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe($.gulp.dest($.path.php.dest))
    .pipe($.browserSync.stream());
}

module.exports = php;