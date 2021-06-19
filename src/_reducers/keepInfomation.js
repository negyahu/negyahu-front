import * as keepInfoAPI from '../_actions/keepInformation';

const initialState = {
    artist: null,
}

export default function keepInfoReducer(state = initialState, action) {
    switch (action.type) {
        case keepInfoAPI.KEEP_ARTIST_MEMBER:
            return {
                ...state,
                artist: action.payload
            }
        default:
            return state
    }
}