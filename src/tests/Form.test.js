import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Form from '../components/Form'



describe(`Form component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a Form by default', () => {
    const wrapper = shallow(<Form />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Form given props', () => {
    const wrapper = shallow(<Form {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
