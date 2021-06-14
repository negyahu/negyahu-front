import axios from 'axios';

export const setLogin = async (userInfo) => {
    const response = await axios.post('http://3.36.75.14/api/login', userInfo)
    return response;
}

export const setSignUpUser = async (userInfo) => {
    const response = await axios.post('http://3.36.75.14/api/accounts', userInfo)
    return response;
}

export const setDuplicateEmailCheck = async (email) => {
    const response = await axios({
        url: 'http://3.36.75.14/api/check/email',
        method: 'get',
        params: {
            email: email
        }
    })
    return response;
}