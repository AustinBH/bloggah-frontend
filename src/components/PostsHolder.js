import React, {useState, useEffect} from 'react';
import { api } from '../services/api';

const PostsHolder = props => {

    const [posts, setPosts] = useState([])

    const displayPosts = () => {
        return api.posts.getPosts().then(json => {
            return setPosts(json)
        })
    }

    useEffect(() => {
        displayPosts()
    })

    return <div>
        {posts.map(post => post.title)}
    </div>
}

export default PostsHolder