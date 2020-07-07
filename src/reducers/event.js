import {
    EVENTS_ITEM_REQUEST,
    EVENTS_ITEM_SUCCESS,
    EVENTS_ITEM_ERROR,
} from '../actions/event';

export const INITIAL_STATE = {
    item: {},
    loading: false,
};

export default function eventsItemReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EVENTS_ITEM_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case EVENTS_ITEM_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                item: action.data,
            });

        case EVENTS_ITEM_ERROR:
            return Object.assign({}, state, {
                loading: false,
            });

        default:
            return state;
    }
}
