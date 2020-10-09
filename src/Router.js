import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Timer from './Timer';
import Config from './Config';

import history from './history';

export default function App() {
  return (
    <HashRouter history={history} basename={window.location.pathname || ''}>
          <Switch>
              <Route exact path="/" component={Config} />
              <Route exact path="/timer" component={Timer} />
          </Switch>
      </HashRouter>
  )
}