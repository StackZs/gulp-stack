

const del = require('del');
const clear = () => {
    return $.app.isPHP ? del($.path.rootPHP,{force: true}) : del($.path.root)
};

module.exports = clear;
