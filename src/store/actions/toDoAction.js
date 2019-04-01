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

export const addToDo = description => {
    const request = services.postCreated(description)
    return {
        type: 'TODO_ADDED',
        payload: request
    }
}