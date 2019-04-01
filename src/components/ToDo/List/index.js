import React from 'react'
import ButtonAction from '../../Utility/buttonAction'
import './index.scss'

import { connect } from 'react-redux'


const ToDoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map((todo,index) => (
            <tr key={index}>
                <td className={todo.done ? 'doneToDo' : ''}>{todo.description}</td>
                <td>
                    <ButtonAction style="success" text="Concluir" hide={todo.done} onClick={() => props.handleDone(todo)} />
                    <ButtonAction style="warning" text="Pedente" hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)} />
                    <ButtonAction style="danger" text="Excluir" onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>
                        Tarefas
                    </th>
                    <th className="table-actions">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(ToDoList)