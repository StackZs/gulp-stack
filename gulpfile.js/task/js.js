//Плагины
const plubmer = require('gulp-plumber');
const babel = require('gulp-babel');
const webpack = require('webpack-stream')

const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
    .pipe(plubmer($.app.plumber.js)) // Вывод ошибок
    .pipe(babel())
    .pipe(webpack($.app.webpack))

    .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
}

module.exports = js;