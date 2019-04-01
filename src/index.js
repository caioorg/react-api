'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './components/App/reducer';

const reducers = combineReducers({
  counter: reducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('[data-js="app"]')
);