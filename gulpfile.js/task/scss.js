//Плагины
const plubmer = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const shorthand = require('gulp-shorthand');
const groupcssqueries = require('gulp-group-css-media-queries');
const sassGlob = require('gulp-sass-glob');
const webpCss = require('gulp-webp-css');
const sass = require('gulp-sass')(require('sass'));


const scss = () => {
    return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev })
    .pipe(plubmer($.app.plumber.scss)) // Вывод ошибок
    .pipe(sassGlob()) // Импорт через *.scss = Импорт всех файлов
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer()) // Старые браузеры browserslist
    .pipe(shorthand()) // 
    .pipe(groupcssqueries())
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso()) // Минимифакация
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream()); 
}

module.exports = scss;