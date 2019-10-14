import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';
import NewPost from './NewPost';
import PostsHolder from './PostsHolder';

const SideNav = props => {

    const [search, setSearch] = useState('')

    const handleChange = ev => {
        setSearch(ev.target.value)
    }

    return <Router>
        <Menu vertical className='side-nav'>
            <Menu.Item name='Home' as={NavLink} exact to='/' activeClassName='active' content='Home'/>
            <Menu.Item name='Create New Post' as={NavLink} exact to='/new' activeClassName='active' content='Create New Post' />
            <Menu.Item name='Search'>
                <Input icon='search' placeholder='Search posts...' value={search} onChange={handleChange} />
            </Menu.Item>
        </Menu>
        <Route path='/' exact render={props => <PostsHolder {...props} />}/>
        <Route path='/new' exact render={props => <NewPost {...props} />}/>
    </Router>
}

export default SideNav;