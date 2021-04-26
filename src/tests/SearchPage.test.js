import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchPage from '../components/SearchPage'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })



describe(`SearchPage component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a SearchPage by default', () => {
    const wrapper = shallow(<SearchPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the SearchPage given props', () => {
    const wrapper = shallow(<SearchPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
