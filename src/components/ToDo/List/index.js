import React from 'react'
import ButtonAction from '../../Utility/buttonAction'
import './index.scss'

export default props => {

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
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Descrição
                    </th>
                    <th>
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