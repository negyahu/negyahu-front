// 액션
const OPEN_FIND_EMAIL = 'openModules/OPEN_FIND_EMAIL';
const OPEN_FIND_PASSWORD = 'openModules/OPEN_FIND_PASSWORD';
const OPEN_FOUND_ACCOUNT = 'openModules/OPEN_FOUND_ACCOUNT';


export const openFindEmail = () => dispatch => {
    dispatch({ type: OPEN_FIND_EMAIL })
}

export const openFindPassword = () => dispatch => {
    dispatch({ type: OPEN_FIND_PASSWORD })
}

export const openFoundAccount = () => dispatch => {
    dispatch({ type: OPEN_FOUND_ACCOUNT })
}

const initialState = {
    sign: {
        email: false,
        password: false,
        foundAccount: false
    }
}

// 리듀서
export default function openModules(state = initialState, action) {
    switch (action.type) {
        case OPEN_FIND_EMAIL:
            return {
                ...state,
                sign: {
                    ...state.sign,
                    email: !state.sign.email
                } 
            }
        case OPEN_FIND_PASSWORD:
            return {
                ...state,
                sign: {
                    ...state.sign,
                    password: !state.sign.password
                } 
            }
        case OPEN_FOUND_ACCOUNT:
            return {
                ...state,
                sign: {
                    ...state.sign,
                    foundAccount: !state.sign.foundAccount
                } 
            }
        default:
            return state;
    }
}