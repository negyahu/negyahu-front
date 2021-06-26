import * as keepInfoAPI from '../_actions/keepInformation';

const initialState = {
    members: [],
    member: null,
    user: null,
}

export default function keepInfoReducer(state = initialState, action) {
    switch (action.type) {
        case keepInfoAPI.KEEP_ARTIST_MEMBERS:
            return {
                ...state,
                members: [...state.members, action.payload]
            }
        case keepInfoAPI.KEEP_ARTIST_MEMBER:
            return {
                ...state,
                member: action.payload
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