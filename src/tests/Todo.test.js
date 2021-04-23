import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Todo from '../components/Todo'



describe(`Todo component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a Todo by default', () => {
    const wrapper = shallow(<Todo />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Todo given props', () => {
    const wrapper = shallow(<Todo {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
