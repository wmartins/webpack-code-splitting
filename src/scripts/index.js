import React from 'react';
import ReactDOM from 'react-dom';

const mountDOMNode = document.querySelector('#js-react-app');

// webpack
require('../stylesheets/index.css');
require('file?name=[name].[ext]!../pages/index.html');

import Router from './Router.jsx';

ReactDOM.render(
    Router,
    mountDOMNode
);
