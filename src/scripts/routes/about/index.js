const insertCSS = require('../../insert-css');

module.exports = {
    path: 'about',
    getComponent: (_, cb) => {
        require.ensure([
            './components/'
        ], require => {
            const About = require('./components/');
            insertCSS('about.css');

            cb(null, About);
        });
    }
}
