import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './index.css';
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'
import reducers from './reducers';
import sagas from './sagas';
import * as serviceWorker from './serviceWorker';
import {Login} from "./Login";

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
