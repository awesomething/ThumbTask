import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Card from '../components/Card'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe(`Card component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a Card by default', () => {
    const wrapper = shallow(<Card />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Card given props', () => {
    const wrapper = shallow(<Card {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
