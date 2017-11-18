import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './components/app/app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(
	reducers,
	applyMiddleware(thunkMiddleware)
);

const Application = () => (
	<Provider store={store}>
		<App />
	</Provider >
);

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
