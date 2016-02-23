import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';

const routes = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: App,
        indexRoute: { component: Home },
        childRoutes: [
            require('./routes/about/'),
            require('./routes/news/')
        ]
    }]
};

export default (
    <Router history={browserHistory} routes={routes} />
);
