import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost';
import PostsHolder from './PostsHolder';

const SideNav = props => {

    return (
        <Router>
          <div className="side-nav">
            <NavLink
              name="Home"
              exact
              to="/"
              activeClassName="active"
            >Home</NavLink>
            <NavLink
              name="Create New Post"
              exact
              to="/new"
              activeClassName="active"
            >Create New Post</NavLink>
          </div>
          <Route path="/" exact render={props => <PostsHolder {...props} />} />
          <Route path="/new" exact render={props => <NewPost {...props} />} />
        </Router>
    );
}

export default SideNav;