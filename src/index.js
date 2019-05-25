import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';
import DevTools from './DevTools';
import { getCountries } from './actions/actions-countries'
import routes from './routes';

render(
	<Provider store={store}>
		<div>
			<Router history={hashHistory} routes={routes}/>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('root')
);