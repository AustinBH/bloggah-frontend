import React from 'react';
import { shallow } from 'enzyme';
import PostsHolder from '../components/PostsHolder';

it('renders without crashing', () => {
    shallow(<PostsHolder />)
});