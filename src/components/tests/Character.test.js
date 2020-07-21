import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Character from '../Character';

const mockStore = configureMockStore([])

describe('Character component testing', () => {
    let wrapper;
    const store = mockStore({
        user: {
            stats: {
                gender: 'Male',
                level: 1,
                constitution: 1,
                attack: 1,
                defense: 1,
                dexterity: 1,
                intelligence: 1,
                speed: 1
            },
            battleStats: {
                health: 5,
                attackPower: 2,
                magicPower: 2,
                damageReduction: 0.02,
                dodge: 0.02,
                turnSpeed: 2,
                ultimate: 0
            },
            skillPoint: 30,
        }
    })

    beforeEach(() => {
        wrapper = mount(<Provider store={store}><Character /></Provider>)

    })

    test('Character Header text', () => {
        expect(wrapper.find('.tab-header').text()).toBe('Character Information')
    });

    test('Skill Point should be 30', () => {
        expect(wrapper.find('.skill-point').text()).toContain('30')
    });

    test('Simulate a plus Button on CON', () => {
        wrapper.find('.plus-con').simulate('click')
        expect(wrapper.find('.count-con').text()).toContain("1")
        expect(wrapper.find('.skill-point').text()).toContain('29')
        wrapper.find('.plus-con').simulate('click')
        expect(wrapper.find('.count-con').text()).toContain("2")
        expect(wrapper.find('.skill-point').text()).toContain('28')

    });

    test('Simulate a minus Button on CON', () => {
        wrapper.find('.plus-con').simulate('click')
        expect(wrapper.find('.count-con').text()).toContain("1")
        expect(wrapper.find('.skill-point').text()).toContain('29')
        wrapper.find('.minus-con').simulate('click')
        expect(wrapper.find('.count-con').text()).toContain("0")
        expect(wrapper.find('.skill-point').text()).toContain('30')

    });

}) 

