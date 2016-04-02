import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import routes from './router';

let history = createHashHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('APP'));