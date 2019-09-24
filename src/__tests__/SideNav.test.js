import React from 'react';
import { shallow } from 'enzyme';
import SideNav from '../components/SideNav';

it('renders without crashing', () => {
    shallow(<SideNav />)
});