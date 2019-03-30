import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3003'
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const postCreated = (description) => {
    return instance({
        method: 'POST',
        data: {
            description: description
        },
        url: '/api/v1'
    })
    .then(resp => resp)
}

const listToDo = () => {
    return instance({
        method: 'GET',
        url: '/api/v1/?sort=created'
    })
    .then(res => res.data)
}

const deleteToDo = (id) => {
    return instance({
        method: 'DELETE',
        url: `/api/v1/${id}`
    })
    .then(res => res)
}

const doneToDo = (todo) => {
    return instance({
        method: 'PUT',
        url: `/api/v1/${todo._id}`,
        data: {
            ...todo,
            done: true
        },
    })
    .then(res => res)
}

const notDoneToDo = (todo) => {
    return instance({
        method: 'PUT',
        url: `/api/v1/${todo._id}`,
        data: {
            ...todo,
            done: false
        },
    })
    .then(res => res)
}

export default {
    postCreated,
    listToDo,
    deleteToDo,
    doneToDo,
    notDoneToDo
}