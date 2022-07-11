global.$ = {
    nameProject: 'Project',
    // Пакеты
    gulp: require('gulp'),
    gp: require("gulp-load-plugins"),
    browserSync: require('browser-sync').create(),

    //Конфигурация 
    path: require('./config/path.js'),
    app: require('./config/app.js')
}



const browserSync = require('browser-sync');
// Задачи 
const requireDir = require('require-dir');
const task = requireDir('./task', {recurse: true})


// Наблюдатели
const watcher = () => {
    $.app.isPHP 
    ? $.gulp.watch($.path.php.watch, task.php)
    : $.gulp.watch($.path.html.watch, task.html);
    $.gulp.watch($.path.css.watch, task.css);
    $.gulp.watch($.path.scss.watch, task.scss);
    $.gulp.watch($.path.js.watch, task.js);
    $.gulp.watch($.path.img.watch, task.img);
    $.gulp.watch($.path.font.watch, task.font);
}




const build = $.gulp.series(
    task.clear,
    $.gulp.parallel($.app.isPHP ? 
        task.php : task.html,
        task.scss,task.js,task.img,task.font),
)
const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher,task.server)
)

// Задачи
exports.html = task.html;
exports.php = task.php;
exports.clear = task.clear;
exports.css = task.css;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;

// Сборка
exports.default = $.app.isProd
    ? build
    : dev;

