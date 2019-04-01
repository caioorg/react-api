import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, stepChanged } from './actions'
import ButtonActions from '../Utility/buttonAction'


const App = props => (
    <div className="container">
        <div class="row">
            <h1>{ props.counter.number }</h1>
        </div>
        <div className="row">
            <div class="form-group">
                <input onChange={props.stepChanged} type="number" value={props.counter.step} className="form-control" />
            </div>
            <button  onClick={props.incrementCount}>Adição</button>
            <button onClick={props.decrementCount}>Subtração</button>
        </div>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ incrementCount, decrementCount, stepChanged }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)

