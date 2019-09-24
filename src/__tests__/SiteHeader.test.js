import React from 'react';
import { shallow } from 'enzyme';
import SiteHeader from '../components/SiteHeader';
import { Icon } from 'semantic-ui-react';

it('renders without crashing', () => {
    shallow(<SiteHeader />)
});

it('includes an h1 with "Bloggah" inside it', () => {
    const wrapper = shallow(<SiteHeader />)
    const header = <h1><Icon name='write' />Bloggah</h1>
    expect(wrapper.contains(header)).toEqual(true);
});