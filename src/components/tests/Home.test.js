import React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';

describe('Home shallow testing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />)
    })

    test('Home Header text', () => {
        expect(wrapper.find('.tab-header').text()).toContain('Welcome to Cornucopia!')
    });

    test('Quality Assurance members length correct', () => {
        expect(wrapper.find('ul.qa-members').children()).toHaveLength(3);
    });

    test('Quality Assurance members names', () => {
        expect(wrapper.find('ul.qa-members').text()).toContain("Will Berlin");
        expect(wrapper.find('ul.qa-members').text()).toContain("Alec Castillo");
        expect(wrapper.find('ul.qa-members').text()).toContain("D'Michael Watson");

    });


})

