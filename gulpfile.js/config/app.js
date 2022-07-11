const notify = require('gulp-notify');
isProd = process.argv.includes('--production');
isPHP = process.argv.includes('--php');
isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,
    isPHP: isPHP,
    plumber: {
        php: {
            errorHandler: notify.onError(e => ({
                title: 'PHP',
                message: e.message
            }))
        },
        html: {
            errorHandler: notify.onError(e => ({
                title: 'HTML',
                message: e.message
            }))
        },
        css: {
            errorHandler: notify.onError(e => ({
                title: 'CSS',
                message: e.message
            }))
        },
        scss: {
            errorHandler: notify.onError(e => ({
                title: 'SCSS',
                message: e.message
            }))
        },
        js: {
            errorHandler: notify.onError(e => ({
                title: 'JS',
                message: e.message
            }))
        },
        img: {
            errorHandler: notify.onError(e => ({
                title: 'Image',
                message: e.message
            }))
        },
        font: {
            errorHandler: notify.onError(e => ({
                title: 'FONTS',
                message: e.message
            }))
        }
    },
    webpack: {
        mode: isProd ? "production" : "development"
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg ']
    }
    
}