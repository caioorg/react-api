import React, { Component } from 'react'
import FormToDo from './Form'
import ListToDo from './List'
import services from '../../services'

export default class Todo extends Component {
    constructor(props)  {
        super(props)
        this.state = { description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.refreshList()
    }

    refreshList() {
        services.listToDo()
            .then(res => this.setState({ ...this.state, description: '', list: res}))
        
    }

    handleAdd() {
        const description = this.state.description
        services.postCreated(description)
            .then(res => this.refreshList())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo) {
        services.deleteToDo(todo._id)
            .then(res => this.refreshList())
    }

    handleDone(todo) {
        services.doneToDo(todo)
            .then(res => this.refreshList())
    }

    handleMarkAsPending(todo) {
        services.notDoneToDo(todo)
            .then(res => this.refreshList())
    }
    
    render() {
        return (
            <div className="container">
                <FormToDo 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleChange}
                />
                <ListToDo 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleDone={this.handleDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }   
}