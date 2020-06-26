import {
    EVENTS_LIST_REQUEST,
    EVENTS_LIST_SUCCESS,
    EVENTS_LIST_ERROR,
} from '../actions/events';

export const INITIAL_STATE = {
    list: [],
    loading: false,
};

export default function eventsListReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EVENTS_LIST_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case EVENTS_LIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                list: action.data,
            });

        case EVENTS_LIST_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
