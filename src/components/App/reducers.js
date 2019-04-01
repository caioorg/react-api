import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'Funcionou Redux',
            done: true
        }, {
            _id: 2,
            description: 'Funcionou de novo Redux',
            done: false
        }]
    })
})

export default rootReducer