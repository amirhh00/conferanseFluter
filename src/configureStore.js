import { createStore, applyMiddleware } from 'redux';
import { persistCombineReducers, persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import navbar from './components/NavBar/reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'navbar',
  ],
  // debug: true,
};

const rootReducer = persistCombineReducers(rootPersistConfig, {
  navbar,
});

const history = createHistory();

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(thunk, routerMiddleware(history))
    ));

persistStore(store);

export { history };
export default store;
