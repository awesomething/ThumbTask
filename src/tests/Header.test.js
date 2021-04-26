import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from '../components/Header'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })


describe(`Header component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a Header by default', () => {
    const wrapper = shallow(<Header {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Header given props', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
