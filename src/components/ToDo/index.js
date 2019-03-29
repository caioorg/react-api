import React, { Component } from 'react'
import FormToDo from './Form'
import services from '../../services'

const URL = 'http://localhost:3003/api/v1'

export default class Todo extends Component {
    constructor(props)  {
        super(props)
        this.state = { description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {
        const description = this.state.description
        const result = services.postCreated(description)
        console.log(result)
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