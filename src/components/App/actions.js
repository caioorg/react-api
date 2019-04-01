export function incrementCount() {
    return {
        type: 'VALUE_INCREMET'
    }
}

export function decrementCount() {
    return {
        type: 'VALUE_DECREMENT'
    }
}

export function stepChanged(e) {
    return {
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}