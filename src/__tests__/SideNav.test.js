import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SideNav from '../components/SideNav';
import NewPost from '../components/NewPost';
import PostsHolder from '../components/PostsHolder';

it('renders without crashing', () => {
    shallow(<SideNav />)
});

describe("<SideNav />", () => {
    let wrapper;

    test('home path should render posts holder component', () => {
        wrapper = mount(<MemoryRouter initialEntries={[ '/' ]}>
            <SideNav/>
        </MemoryRouter>);
        expect(wrapper.find(PostsHolder)).toHaveLength(1);
    });

    // test('new path should render new post component', () => {
    //     wrapper = mount(<MemoryRouter initialEntries={[ '/new' ]}>
    //         <SideNav />
    //     </MemoryRouter>);
    //     expect(wrapper.find(NewPost)).toHaveLength(1);
    // });

});