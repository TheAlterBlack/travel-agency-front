import axios from 'axios';

export const EVENTS_LIST_REQUEST = 'EVENTS_LIST_REQUEST';
export const EVENTS_LIST_SUCCESS = 'EVENTS_LIST_SUCCESS';
export const EVENTS_LIST_ERROR = 'EVENTS_LIST_ERROR';

export function loadList () {
    return async function (dispatch) {
        dispatch({
            type: EVENTS_LIST_REQUEST,
        });

        try {
            const response = await axios.get('http://localhost:3001/vacations');

            return dispatch({
                type: EVENTS_LIST_SUCCESS,
                data: response.data.data,
            });
        } catch {
            return dispatch({
                type: EVENTS_LIST_ERROR,
            });
        }
    };
}
