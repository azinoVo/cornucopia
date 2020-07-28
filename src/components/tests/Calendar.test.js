import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Calendar from '../Calendar';

const mockStore = configureMockStore([])

describe('Calendar component testing', () => {
    let wrapper;
    const store = mockStore({
        game: {
            date: 0,
            calendar: [
                { id: 1, type: "spring_seed", date: "Spring Cycle Day I", benefit: "Spring plants are flourishing." },
                { id: 2, type: "spring_seed", date: "Spring Cycle Day II", benefit: "Spring plants are flourishing." },
                { id: 3, type: "spring_seed", date: "Spring Cycle Day III", benefit: "Spring plants are flourishing." },
                { id: 4, type: "spring_seed", date: "Spring Cycle Day IV", benefit: "Spring plants are flourishing." },
                { id: 5, type: "max_spring_seed", date: "Spring Cycle Day V", benefit: "Spring plants look stunning today." },
                { id: 6, type: "summer_seed", date: "Summer Cycle Day I", benefit: "Summer plants are flourishing." },
                { id: 7, type: "summer_seed", date: "Summer Cycle Day II", benefit: "Summer plants are flourishing." },
                { id: 8, type: "summer_seed", date: "Summer Cycle Day III", benefit: "Summer plants are flourishing." },
                { id: 9, type: "summer_seed", date: "Summer Cycle Day IV", benefit: "Summer plants are flourishing." },
                { id: 10, type: "max_summer_seed", date: "Summer Cycle Day V", benefit: "Summer plants look stunning today." },
                { id: 11, type: "autumn_seed", date: "Autumn Cycle Day I", benefit: "Autumn plants are flourishing." },
                { id: 12, type: "autumn_seed", date: "Autumn Cycle Day II", benefit: "Autumn plants are flourishing." },
                { id: 13, type: "autumn_seed", date: "Autumn Cycle Day III", benefit: "Autumn plants are flourishing." },
                { id: 14, type: "autumn_seed", date: "Autumn Cycle Day IV", benefit: "Autumn plants are flourishing." },
                { id: 15, type: "max_autumn_seed", date: "Autumn Cycle Day V", benefit: "Autumn plants look stunning today." },
                { id: 16, type: "winter_seed", date: "Winter Cycle Day I", benefit: "Winter plants are flourishing." },
                { id: 17, type: "winter_seed", date: "Winter Cycle Day II", benefit: "Winter plants are flourishing." },
                { id: 18, type: "winter_seed", date: "Winter Cycle Day III", benefit: "Winter plants are flourishing." },
                { id: 19, type: "winter_seed", date: "Winter Cycle Day IV", benefit: "Winter plants are flourishing." },
                { id: 20, type: "max_winter_seed", date: "Winter Cycle Day V", benefit: "Winter plants look stunning today." },
            ],
        }
    })

    beforeEach(() => {
        wrapper = mount(<Provider store={store}><Calendar /></Provider>)
        wrapper.find('.button').simulate('click');

    })

    test('Calendar Header text', () => {
        expect(wrapper.find('h1').text()).toBe('Today is Spring Cycle Day I');
    });

    test('Change the Date', () => {
        // Should click the rest button and h1 should change
    });


})

