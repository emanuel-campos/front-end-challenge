import App from './App'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', () => {
  test('should have title text with name of customer', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('h1').text()).toBe('Grand Motors')
  })
})
