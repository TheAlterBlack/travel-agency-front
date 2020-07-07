import axios from 'axios';

export const EVENTS_ITEM_REQUEST = 'EVENTS_ITEM_REQUEST';
export const EVENTS_ITEM_SUCCESS = 'EVENTS_ITEM_SUCCESS';
export const EVENTS_ITEM_ERROR = 'EVENTS_ITEM_ERROR';

export function loadItem (id) {
    return async function (dispatch) {
        dispatch({
            type: EVENTS_ITEM_REQUEST,
        });

        try {
            const response = await axios.get(`http://localhost:3001/vacations/${id}`);

            return dispatch({
                type: EVENTS_ITEM_SUCCESS,
                data: response.data.item,
            });
        } catch {
            return dispatch({
                type: EVENTS_ITEM_ERROR,
            });
        }
    };
}
