// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Import reducer
import rootReducer from './redux/reducers';

// Import components
import App from './app';

// Init Redux
export const history = createBrowserHistory();
export const store = createStore(
  combineReducers({ rootReducer }),
  (process.env.NODE_ENV === 'production')
    ? applyMiddleware(reduxThunk)
    : composeWithDevTools(applyMiddleware(reduxThunk)),
);

// Render!
const rootDom = document.getElementById('root');
if (rootDom) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route component={App} />
      </Router>
    </Provider>,
    rootDom,
  );
}
