module.exports = {
    path: 'news',
    getComponent: (_, cb) => {
        require.ensure([
            './components/'
        ], require => {
            const News = require('./components/');

            cb(null, News);
        });
    }
}
