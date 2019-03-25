'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

const title = 'My Minimal React Webpack Babel Setup'

ReactDOM.render(
  <div>{title}</div>,
  document.querySelector('[data-js="app"]')
);