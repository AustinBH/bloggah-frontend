import React, { Component } from 'react';
import { api } from '../services/api';

class PostsHolder extends Component {

    state = {
        posts: []
    }

    displayPosts = () => {
        return api.posts.getPosts().then(json => {
            return this.setState({posts: json})
        })
    }

    componentDidMount(){
        this.displayPosts()
    }

    render() {
        return this.state.posts.map(post => {
            return <div key={post.id}>
                <h1>Title: {post.title}</h1>
                <p>Written by: {post.user.username}</p>
                <p>Content: {post.content}</p>
                <p>Comments: {post.comments.map(comment => comment.text)}</p>
            </div>})
    };
}

export default PostsHolder