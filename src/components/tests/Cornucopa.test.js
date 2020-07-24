import React from 'react';
import Cornucopia from '../Cornucopia';
import { shallow } from 'enzyme';

describe('Cornucopia shallow testing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Cornucopia />)
    })

    test('Cornucopia Header text', () => {
        expect(wrapper.find('.tab-header').text()).toContain('The Tree of Life')
    });

})

