import axios from 'axios';

export const setLogin = async (userInfo) => {
    const response = await axios.post('/api/login', userInfo)
    return response.data;
}

export const setSignUpUser = async (userInfo) => {
    const response = await axios.post('http://3.36.75.14/api/accounts', userInfo)
    return response.data;
}

export const setDuplicateEmailCheck = async (email) => {
    const response = await axios.get(`http://3.36.75.14//api/accounts/${email}/email`)
    return response.data;
}