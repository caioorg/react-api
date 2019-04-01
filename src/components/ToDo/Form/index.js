import React, { Component } from 'react'
import Grid from '../../Utility/gridSetting'
import ButtonAction from '../../Utility/buttonAction'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, searchToDO, addToDo } from '../../../store/actions/toDoAction'

class FormToDo extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        const { addToDo, searchToDO, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? searchToDO() : addToDo(description)
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    componentWillMount() {
        this.props.searchToDO()
    }

    render() {
        const { addToDo, searchToDO, description } = this.props

        return (
            <div role='form' className='toDoForm'>
                <div className="row">
                    <Grid cols="8 8 8 8 8">
                        <input 
                            id="description"
                            className="form-control"
                            placeholder="Adicione uma tarefa"
                            value={this.props.description}
                            onChange={this.props.changeDescription}
                        />
                    </Grid>
                    <Grid cols="4 4 4 4 4">
                        <ButtonAction style="success" onClick={() => addToDo(description)} text="Adicionar" />
                        <ButtonAction style="primary" onClick={() => searchToDO()} text="Pesquisar" />
                        <ButtonAction style="secondary" onClick={this.props.handleClear} text="Limpar" />
                    </Grid>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, searchToDO, addToDo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormToDo)