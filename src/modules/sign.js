import * as signAPI from '../api/sign';
import { createPromiseThunk, handleAsyncActions, reducerUtils } from '../utils/asyncUtils';

// 액션
const SET_LOGIN = 'sign/SET_LOGIN';
const SET_LOGIN_SUCCESS = 'sign/SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'sign/SET_LOGIN_ERROR';

const FIND_EMAIL = 'sign/FIND_EMAIL';
const FIND_PASSWORD = 'sign/FIND_PASSWORD';

const SIGN_UP = 'sign/SIGN_UP';
const SIGN_UP_SUCCESS = 'sign/SIGN_UP_SUCCESS';
const SIGN_UP_ERROR = 'sign/SIGN_UP_ERROR';

// 액션 생성함수
export const setLogin = createPromiseThunk(SET_LOGIN, signAPI.setLogin)
export const setSignUpUser = createPromiseThunk(SIGN_UP, signAPI.setSignUpUser)

const initialState = {
    login: reducerUtils.initial(),
    sign: reducerUtils.initial()
}

const setLoginReducer = handleAsyncActions(SET_LOGIN, 'login')
const setSignUpUserReducer = handleAsyncActions(SIGN_UP, 'sign')

// 리듀서
export default function sign(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
        case SET_LOGIN_SUCCESS:
        case SET_LOGIN_ERROR:
            return setLoginReducer(state, action)
        case SIGN_UP:
        case SIGN_UP_SUCCESS:
        case SIGN_UP_ERROR:
            return setSignUpUserReducer(state, action)
        default:
            return state;
    }
}