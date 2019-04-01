import React from 'react'
import Grid from '../../Utility/gridSetting'
import ButtonAction from '../../Utility/buttonAction'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../../../store/actions/toDoAction'

const FormToDo = props => (
    <div role='form' className='toDoForm'>
        <div className="row">
            <Grid cols="8 8 8 8 8">
                <input 
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.changeDescription}
                />
            </Grid>
            <Grid cols="4 4 4 4 4">
                <ButtonAction style="success" onClick={props.handleAdd} text="Adicionar" />
                <ButtonAction style="primary" onClick={props.handleSearch} text="Pesquisar" />
                <ButtonAction style="secondary" onClick={props.handleClear} text="Limpar" />
            </Grid>
        </div>
    </div>
)

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormToDo)