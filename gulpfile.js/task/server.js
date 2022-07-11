const server = () => {
    $.app.isPHP 
    ? $.browserSync.init({
        proxy: 'web-development'
    })
    : $.browserSync.init({
        server: {
            baseDir: $.app.isPHP ? $.path.rootPHP : $.path.root
        },
    })
}
module.exports = server;