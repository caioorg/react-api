import React, { Component } from 'react'
import 'bootstrap/scss/bootstrap.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleChange } from './actions'

class App extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label>
                <input onChange={this.props.handleChange} value={this.props.value} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.field.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({handleChange}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

