import services from '../../services'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const searchToDO = () => {
    const request = services.listToDo()
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const addToDo = (description) => {
    return dispatch => {
        const request = services.postCreated(description)
            .then(
                resp => dispatch({
                    type: 'TODO_ADDED',
                    payload: resp
                })
            )
            .then(resp => dispatch(searchToDO()))
    }
}