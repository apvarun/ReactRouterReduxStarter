import {SET_APP_STATE} from '../types/appState';
export const setAppState = (app_state) => {
    return dispatch => {
        dispatch({type: SET_APP_STATE, payload: {
                app_state
            }})
    }
}