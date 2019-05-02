/**
 * Combine all reducers in this file and export the combined reducers.
 */

// import { combineReducers } from 'redux-immutable';
import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router';
import history from './config/history'
import navbar from './components/NavBar/reducer';


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    navbar,
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
