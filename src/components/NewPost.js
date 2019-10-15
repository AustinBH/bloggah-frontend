import React, { useState } from 'react';
import { api } from '../services/api';

const NewPost = props => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleChange = ev => {
        if (ev.target.name === 'title') {
            setTitle(ev.target.value)
        } else if (ev.target.name === 'content') {
            setContent(ev.target.value)
        }
    }

    const handleSubmit = ev => {
        ev.preventDefault()
    }

    return <div className='new-post'>
        <h1>New Post</h1>
        <form className='new-post-form' onSubmit={handleSubmit}>
            <label>Title:</label>
            <input onChange={handleChange} value={title} type='text' name='title'/>
            <label>Content:</label>
            <input onChange={handleChange} value={content} type='text-area' name='content'/>
            <input type='submit' value='Create post'/>
        </form>
    </div>
}

export default NewPost;