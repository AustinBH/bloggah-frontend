import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

const NewPost = props => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')

    const displayMessage = jsonMessage => {
        if (jsonMessage.error) {
            let message = ''
            // Need to catch multiple errors if they exist
            for (let error in jsonMessage.error) {
                message += error + ' ' + jsonMessage.error[error] + ' '
            }
            setMessage(message)
        } else {
            setMessage('Post created successfully!')
        }
    }

    const handleChange = ev => {
        if (ev.target.name === 'title') {
            setTitle(ev.target.value)
        } else if (ev.target.name === 'content') {
            setContent(ev.target.value)
        }
    }

    const handleSubmit = ev => {
        ev.preventDefault()
        // Just using a placeholder user id since there is no login currently
        const post = {title: title, content: content, user_id: 1}
        api.posts.createPost({ post: post}).then(json => displayMessage(json))
    }

    // We want to clear out the message after 4 seconds when a post is submitted
    useEffect(() => {
        let timer = setTimeout(() => setMessage(''), 4000);
        return () => clearTimeout(timer)
    }, [message])

    return <div className='new-post'>
        <h1>New Post</h1>
        <form className='new-post-form' onSubmit={handleSubmit}>
            <label>Title:</label>
            <input onChange={handleChange} value={title} type='text' name='title'/>
            <label>Content:</label>
            <input onChange={handleChange} value={content} type='text-area' name='content'/>
            <input type='submit' value='Create post'/>
        </form>
        {message}
    </div>
}

export default NewPost;