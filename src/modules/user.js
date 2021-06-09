import * as usersAPI from '../api/users';
import { createPromiseThunk, handleAsyncActions, reducerUtils } from '../utils/asyncUtils';

const GET_USER = 'user/GET_USER';
const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
const GET_USER_ERROR = 'user/GET_USER_ERROR';

export const getUser = createPromiseThunk(GET_USER, usersAPI.getUser);

const initialState = {
    user: reducerUtils.initial()
}

const getUserReducer = handleAsyncActions(GET_USER, 'user');

export default function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
        case GET_USER_SUCCESS:
        case GET_USER_ERROR:
            return getUserReducer(state, action);
        default:
            return state;
    }
}