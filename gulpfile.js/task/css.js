//Плагины
const plubmer = require('gulp-plumber');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const shorthand = require('gulp-shorthand');
const webpCss = require('gulp-webp-css');
const groupcssqueries = require('gulp-group-css-media-queries');


const css = () => {
    return $.gulp.src($.path.css.src, { sourcemaps: $.app.isDev })
    .pipe(plubmer($.app.plumber.css)) // Вывод ошибок
    .pipe(webpCss())
    .pipe(concat("main.css"))
    .pipe(cssimport()) 
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupcssqueries())
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
    
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
}

module.exports = css;