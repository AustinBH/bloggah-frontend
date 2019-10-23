const MAIN_URL = 'http://localhost:3000/api/v1'
const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const getPosts = (id='') => {
    return fetch(`${MAIN_URL}/post/${id}`, {
        headers: HEADERS,
        method: 'GET'
    }).then(res => res.json())
}

const createPost = data => {
    return fetch(`${MAIN_URL}/post`, {
        headers: HEADERS,
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => res.json())
}

export const api = {
    posts: {
        getPosts,
        createPost
    },
    users: {

    },
    comments: {

    }
}