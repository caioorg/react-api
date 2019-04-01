'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

const reducers = combineReducers({
  field: () => ({ value: 'Opaa' })
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App initialValue="teste" />
  </Provider>,
  document.querySelector('[data-js="app"]')
);