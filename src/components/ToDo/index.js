import React, { Component } from 'react'
import FormToDo from './Form'

export default class Todo extends Component {
    constructor(props)  {
        super(props)
        this.state = { description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {
        console.log(this.state.description)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    
    render() {
        return (
            <div className="container">
                <FormToDo 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }   
}