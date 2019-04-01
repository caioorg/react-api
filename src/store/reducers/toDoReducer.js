const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}