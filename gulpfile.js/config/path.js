global.$ = {
    app: require('./app.js'),
    config: require('./config.js')
}

const pathSrc = './src';
const pathDest = './public';
const pathPHP = `../../../php/${$.config.nameProject}`;

module.exports = {
    root: pathDest,
    rootPHP: pathPHP,
    php: {
        src: pathSrc + '/php/*.php',
        watch: pathSrc + '/php/**/*.php',
        dest: pathPHP
    },
    html: {
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: $.app.isPHP ? pathPHP : pathDest
    },
    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: $.app.isPHP ? pathPHP + '/css' : pathDest + '/css'
    },
    scss: {
        src: pathSrc + '/scss/*.scss',
        watch: pathSrc + '/scss/**/*.scss',
        dest: $.app.isPHP ? pathPHP + '/css' : pathDest + '/css'
    },
    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: $.app.isPHP ? pathPHP + '/js' : pathDest + '/js'
    },
    img: {
        src: pathSrc + '/img/*.{png,jpg,jpeg,gif,svg,ico}',
        watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,ico}',
        dest: $.app.isPHP ? pathPHP + '/img' : pathDest + '/img'
    },
    font: {
        src: pathSrc + '/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: $.app.isPHP ? pathPHP + '/font' : pathDest + '/font'
    }
}