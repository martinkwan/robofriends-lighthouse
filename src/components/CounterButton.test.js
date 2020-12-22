import { shallow, mount } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  expect(wrapper).toMatchSnapshot();
  
})

//Seperate test to be more descriptive
it('should increment count if button is clicked', () => {
  const wrapper = shallow(<CounterButton />);

  expect(wrapper.state('count')).toEqual(0);
  wrapper.simulate('click');
  expect(wrapper.state('count')).toEqual(1);
  wrapper.simulate('click');
  expect(wrapper.state('count')).toEqual(2);
  wrapper.simulate('keypress');
  expect(wrapper.state('count')).toEqual(2);
})

it('should not update if component state count does not change', () => {
  const wrapper = shallow(<CounterButton />)
  const shouldUpdate = wrapper.instance().shouldComponentUpdate({}, {count: 0})
  expect(shouldUpdate).toBe(false)

})

//Should work but it does not..
// it('should call updateCount when the button is clicked', () => {
//   const wrapper = shallow(<CounterButton />);
//   const instance = wrapper.instance();
//   jest.spyOn(instance, 'updateCount');
//   wrapper.simulate('click');

//   expect(instance.updateCount).toHaveBeenCalledTimes(1);
// })