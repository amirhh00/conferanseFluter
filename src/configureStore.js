// import { createStore, applyMiddleware } from 'redux';
// import { persistCombineReducers, persistReducer, persistStore } from 'redux-persist';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
// import createHistory from 'history/createBrowserHistory';
// import { routerMiddleware } from 'react-router-redux';

// import navbar from './components/NavBar/reducer';

// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   blacklist: [
//     'navbar',
//   ],
//   // debug: true,
// };

// const rootReducer = persistCombineReducers(rootPersistConfig, {
//   navbar,
// });

// const history = createHistory();

// const store = createStore(
//   rootReducer,
//   undefined,
//   composeWithDevTools(
//     applyMiddleware(thunk, routerMiddleware(history))
//   ));

// persistStore(store);

// export { history };
// export default store;


/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';


const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
