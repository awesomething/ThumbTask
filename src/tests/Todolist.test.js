import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Todolist from '../components/Todolist'


describe(`Todolist component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a Todolist by default', () => {
    const wrapper = shallow(<Todolist />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Todolist given props', () => {
    const wrapper = shallow(<Todolist {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

