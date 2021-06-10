import axios from 'axios';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const user = [
    {
        name: '황유정',
        phone: '010-1234-1234',
        email: 'youjeong@gmail.com',
        pwd: '1234',
    },
];

export const setLogin = async (userInfo) => {
    const response = await axios.post('/api/login', userInfo)
    console.log(response)
    if (response) {
        return response.data
    } else {
        await sleep(500)
        return user;
    }
}