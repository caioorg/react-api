import React from 'react'
import Grid from '../../Utility/gridSetting'
import ButtonAction from '../../Utility/buttonAction'
import './index.scss'

export default props => (
    <div role='form' className='toDoForm'>
        <div className="row">
            <Grid cols="8 8 8 8 8">
                <input 
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
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