import * as signAPI from '../api/sign';
import * as sign_action from '../_actions/sign';
import { createPromiseThunk, handleAsyncActions, reducerUtils } from '../utils/asyncUtils';

// 액션 생성함수
export const setLogin = createPromiseThunk(sign_action.SET_LOGIN, signAPI.setLogin)
export const setSignUpUser = createPromiseThunk(sign_action.SIGN_UP, signAPI.setSignUpUser)

const initialState = {
    login: reducerUtils.initial(),
    sign: reducerUtils.initial()
}

const setLoginReducer = handleAsyncActions(sign_action.SET_LOGIN, 'login')
const setSignUpUserReducer = handleAsyncActions(sign_action.SIGN_UP, 'sign')

// 리듀서
export default function sign(state = initialState, action) {
    switch (action.type) {
        case sign_action.SET_LOGIN:
        case sign_action.SET_LOGIN_SUCCESS:
        case sign_action.SET_LOGIN_ERROR:
            return setLoginReducer(state, action)
        case sign_action.SET_LOGOUT:
            return {
                ...state,
                login: reducerUtils.initial()
            }
        case sign_action.SIGN_UP:
        case sign_action.SIGN_UP_SUCCESS:
        case sign_action.SIGN_UP_ERROR:
            return setSignUpUserReducer(state, action)
        default:
            return state;
    }
}