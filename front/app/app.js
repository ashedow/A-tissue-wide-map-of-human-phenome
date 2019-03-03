import React from 'react';
import ReactDOM from 'react-dom';
import Docular from './components/Docular';
// import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/index';


ReactDOM.render(
	// <Provider store={store}>
		<Docular />,
	// </Provider>,
	document.getElementById('app')
);