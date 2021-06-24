import axios from 'axios';
import jwt from 'jwt-decode';

const api = process.env.REACT_APP_API_SERVER

export const setLogin = async (userInfo) => {
    const response = await axios.post(`${api}/api/login`, userInfo)
    .then(res => {
        const token = res.data.token;
        return token
    })
    .catch(err => {
        const array = err.message.split(" ")
        const errCode = array[array.length - 1]
        if (errCode === '401') {
            return { auth: "error" }
        } 
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