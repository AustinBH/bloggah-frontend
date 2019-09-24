import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import SiteHeader from '../components/SiteHeader';

it('renders without crashing', () => {
  shallow(<App />)
});

it('includes a div with the class name of App-header', () => {
  const wrapper = shallow(<App />)
  const bigDiv = <div className='App-header'>
    <SiteHeader />
  </div>
  expect(wrapper.contains(bigDiv)).toEqual(true);
})