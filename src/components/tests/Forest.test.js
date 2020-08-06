import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Forest from '../Forest';

const mockStore = configureMockStore([])

describe('Forest component testing', () => {
    let wrapper;
    const store = mockStore({
        user: {
            forest_plot: [
                { id: 0, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", progress: 25, encounter: false, reward: false},
                { id: 1, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", progress: 25, encounter: false, reward: false}
            ],
            limits: {
                water_limit: 250,
                energy_limit: 200,
                favor_limit: 100,
                main_garden_plot: 6,
                orchard_plot: 6,
                forest_plot: 2,
            },
        }
    })

    beforeEach(() => {
        wrapper = mount(<Provider store={store}><Forest /></Provider>)

    })

    test('Character Header text', () => {
        expect(wrapper.find('.tab-header').text()).toBe('Forest of Dreams');
    });

}) 

