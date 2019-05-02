import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';
import configureStore from './configureStore';
import { ThemeProvider } from 'react-css-themr';
import "@babel/polyfill/noConflict"
import Home from './views/Home';
import NoMatch from './views/NoMatch';
import history from './config/history'
import './index.scss';
import theme from './config/theme';

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
      <ThemeProvider theme={theme}>
        <App>
          <Switch>
            <Route path="/" component={Home} />
            {/* <Route path="/beads" component={Beads} /> */}
            {/* <Route path="/update" component={Update} /> */}
            {/* <Route path="/materials" component={Materials} /> */}
            {/* <Route path="/sizes" component={Sizes} /> */}
            {/* <Route path="/category/:categId" component={Products} /> */}
            {/* <Route path="/product/:productId" component={Product} /> */}
            {/* <Route path="/search/:search" component={Search} /> */}
            {/* <Route path="/cart" component={Cart} /> */}
            <Route component={NoMatch} />
          </Switch>
        </App>
      </ThemeProvider>
      </HashRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// registerServiceWorker();
