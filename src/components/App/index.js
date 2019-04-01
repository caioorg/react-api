import React, { Component } from 'react'
import 'bootstrap/scss/bootstrap.scss'
import Routes from './routes'


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../store/reducers'
import promise from 'redux-promise'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}

export default App