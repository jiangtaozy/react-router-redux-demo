import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const loggerMiddleware = createLogger();

export const store = createStore(
  combineReducers({
    //...reducers,
    router: routerReducer,
  }),
  applyMiddleware(
    middleware,
    thunkMiddleware,
    loggerMiddleware
  )
);
