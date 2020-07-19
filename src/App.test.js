import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App shallow testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('Cornucopia title exists within document header', () => {
    expect(wrapper.find('header').text()).toContain('Cornucopia, Land of Excess')
  });

  test('Name exists within document footer', () => {
    expect(wrapper.find('footer').text()).toContain('Nguyen Vo 2020')
  });


})

