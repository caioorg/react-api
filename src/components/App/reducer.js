const INITIAL_STATE = { step: 1, number: 0 }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'VALUE_INCREMET':
            return { ...state, number: state.number + state.step }
        case 'VALUE_DECREMENT':
            return { ...state, number: state.number - state.step }
        case 'STEP_CHANGED':
            return { ...state, step: +action.payload }
        default:
            return state;
    }
}