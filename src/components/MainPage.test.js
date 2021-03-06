import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  }
  wrapper = shallow(<MainPage {...mockProps}/>);
})

it('expect to render MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();

})

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'John',
    isPending: false,
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }])
})

it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false,
  }
  const wrapper3 = shallow(<MainPage {...mockProps3} />);

  expect(wrapper3.instance().filterRobots()).toEqual([]);
})

it('renders Loading text if isPending is true', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: true,
  }
  const wrapper4 = shallow(<MainPage {...mockProps}/>);

  expect(wrapper4.find('h1').text()).toEqual('Loading');

})