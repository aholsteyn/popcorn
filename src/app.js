import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import reducers from './reducer';
import { watcherSaga } from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Set up Redux store and devtools extension if present
const composeEnhancers = 
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
			
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, loadingBarMiddleware()),
);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(watcherSaga);

// Include initial page
require('./index.html');

// Create app
const container = document.querySelector('#app-container');

// Render app
ReactDOM.render(
  <AppContainer>
		<Provider store={store}>
			<Router>
				<Route path="/" component={App} />
			</Router>
		</Provider>
  </AppContainer>
  , container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
					<App />
				</Provider>
      </AppContainer>
      , container
    );
  });
}