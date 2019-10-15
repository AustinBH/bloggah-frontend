import React from 'react';
import { shallow } from 'enzyme';
import NewPost from '../components/NewPost';

it('renders without crashing', () => {
    shallow(<NewPost />)
});

it('includes an H1 that says new post ', () => {
    const wrapper = shallow(<NewPost />)
    const bigDiv = <h1>New Post</h1>
    expect(wrapper.contains(bigDiv)).toEqual(true);
})