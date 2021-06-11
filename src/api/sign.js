import axios from 'axios';

export const setLogin = async (userInfo) => {
    const response = await axios.post('/api/login', userInfo)
    return response.data;
}

export const setSignUpUser = async (userInfo) => {
    const response = await axios.post('/api/signup', userInfo)
    return response.data;
}

export const setDuplicateEmailCheck = async (email) => {
    const response = await axios.get(`/api/join?email=${email}`)
    return response.data;
}