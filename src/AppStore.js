import _ from 'lodash';
import { createStore } from 'redux';

import data from './MOCK_DATA.json';
import { category, year, companyDictonary } from './Action';

const initialState = data;

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case(category):
            return _.filter(initialState, (item) => item.category === action.payload.type); 
        case(year):
            debugger;
            return _.filter(initialState, (item) => action.payload.fromYear < item.year && item.year < action.payload.toYear); 
        case(companyDictonary):
            return _.filter(initialState, (item) => item);     
        default:
            return initialState;
    }
}

export const store = createStore(rootReducer);

export default store;