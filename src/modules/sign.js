import * as signAPI from '../api/sign';

// 액션
const SET_LOGIN = 'sign/SET_LOGIN';
const SET_LOGIN_SUCCESS = 'sign/SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'sign/SET_LOGIN_ERROR';

const FIND_EMAIL = 'sign/FIND_EMAIL';
const FIND_PASSWORD = 'sign/FIND_PASSWORD';
const SIGN_UP = 'sign/SIGN_UP';

// 액션 생성함수
export const setLogin = (userInfo) => async dispatch => {
    // 액션 실행
    dispatch({ type: SET_LOGIN })
    // api 호출
    try {
        const payload = await signAPI.setLogin(userInfo)
        // 성공했을 때
        dispatch({ type: SET_LOGIN_SUCCESS, payload: payload })
    } catch (e) {
        // 실패했을 때
        dispatch({ type: SET_LOGIN_ERROR, error: e})
    }
}

const initialState = {
    login: {
        loading: false,
        data: null,
        error: null
    }
}

// 리듀서
export default function sign(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                login: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case SET_LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case SET_LOGIN_ERROR:
            return {
                ...state,
                login: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}