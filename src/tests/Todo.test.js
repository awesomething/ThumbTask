import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Todo from '../components/Todo'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })


describe(`Todo component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a .Todo by default', () => {
    const wrapper = shallow(<Todo />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Todo given props', () => {
    const wrapper = shallow(<Todo {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
