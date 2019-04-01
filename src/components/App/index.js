import React, { Component } from 'react'
import 'bootstrap/scss/bootstrap.scss'
import Routes from './routes'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

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