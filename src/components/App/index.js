import React, { Component } from 'react'
import 'bootstrap/scss/bootstrap.scss'
import Routes from './routes'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../store/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, devTools)

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