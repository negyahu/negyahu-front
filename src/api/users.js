const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// { email, name, mobile, imageURL }
const users = [
    {
        name: '황유정',
        phone: '010-1234-1234',
        email: 'youjeong@gmail.com',
        pwd: '1234',
    },
    {
        name: '테스트',
        phone: '010-1234-1234',
        email: 'test@gmail.com',
        pwd: '1234',
    }
];

export const getUser = async email => {
    await sleep(500);
    return users.find(user => user.email === email)
}