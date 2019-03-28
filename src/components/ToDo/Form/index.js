import React from 'react'
import Grid from '../../Utility/gridSetting'

export default props => (
    <div role='form' className='toDoForm'>
        <div className="row">
            <Grid cols="9 9 9 9 9">
                <input 
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid cols="3 3 3 3 3">
                <button 
                    className="btn btn-primary"
                    onClick={props.handleAdd}
                >
                </button>
            </Grid>
        </div>
    </div>
)