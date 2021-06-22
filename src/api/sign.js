import axios from 'axios';
import jwt from 'jwt-decode';

const api = process.env.REACT_APP_API_SERVER

export const setLogin = async (userInfo) => {
    const response = await axios.post(`${api}/api/login`, userInfo)
    .then(res => {
        const token = jwt(res.data.token);
        return token
    })
    .catch(err => {
        return err
    })
    return response;
}

export const setSignUpUser = async (userInfo) => {
    const response = await axios.post(`${api}/api/accounts`, userInfo)
    return response;
}

export const setDuplicateEmailCheck = async (email) => {
    const response = await axios({
        url: `${api}/api/check/email`,
        method: 'get',
        params: {
            email: email
        }
    })
    return response;
}