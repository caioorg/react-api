import React from 'react'
import { Router, Route, Redirect, hashHistory } from  'react-router'
import ToDo from '../ToDo'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={ToDo} />
        <Redirect from="*" to="/" />
    </Router>
)