//Плагины
const plubmer = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpif = require('gulp-if');


const img = () => {
    return $.gulp.src($.path.img.src)
    .pipe(plubmer($.app.plumber.img)) // Вывод ошибок
    .pipe(newer($.path.img.dest))
    .pipe(webp())
    .pipe($.gulp.dest($.path.img.dest))

    .pipe($.gulp.src($.path.img.src))
    .pipe(newer($.path.img.dest))
    .pipe(gulpif($.app.isProd, imagemin($.app.imagemin)))

    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.browserSync.stream());
}

module.exports = img;