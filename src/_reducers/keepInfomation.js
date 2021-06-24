import * as keepInfoAPI from '../_actions/keepInformation';

const initialState = {
    artist: null,
    user: null,
}

export default function keepInfoReducer(state = initialState, action) {
    switch (action.type) {
        case keepInfoAPI.KEEP_ARTIST_MEMBER:
            return {
                ...state,
                artist: action.payload
            }
        case keepInfoAPI.KEEP_USER_INFO:
            return {
                ...state,
                user: action.data
            }
        default:
            return state
    }
}