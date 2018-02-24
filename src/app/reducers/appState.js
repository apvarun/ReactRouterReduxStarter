import {SET_APP_STATE} from '../types/appState';
// Initial state when state is undefined
const initialState = {
    app_state: ''
}
export default(state = initialState, action) => {
    switch (action.type) {
        case SET_APP_STATE:
            return {
                ...state,
                app_state: action.payload.app_state
            }
        default:
            return state
    }
}