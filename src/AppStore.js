import _ from 'lodash';
import { createStore } from 'redux';

import data from './MOCK_DATA.json';
import { category, year, companyDictonary, initApp } from './Action';

const initialState = data;

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case(category):
            return _.filter(initialState, (item) => item.category === action.payload.type); 
        case(year):
            return _.filter(initialState, (item) => action.payload.fromYear < item.year && item.year < action.payload.toYear); 
        case(companyDictonary):
            return _.filter(initialState, (item) => action.payload.fromKey < item.data[0] && item.data[0] < action.payload.toKey); 
        // case(initApp):
        //     return state;
        default:
            return state;
    }
}

export const store = createStore(rootReducer);

export default store;