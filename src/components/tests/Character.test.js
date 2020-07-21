import React from 'react';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Character from '../Character';

const mockStore = configureMockStore([])

describe('Character shallow testing', () => {
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
        expect(wrapper.find('.tab-header').text()).toContain('Character Information')
    });

})

