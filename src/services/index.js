import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3003'
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const postCreated = (description) => {
    return instance({
        method: 'post',
        data: {
            description: description
        },
        url: '/api/v1'
    })
    .then(resp => resp)
}

export default {
    postCreated
}