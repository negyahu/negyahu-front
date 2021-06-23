import axios from 'axios';
import jwt from 'jwt-decode';

const api = process.env.REACT_APP_API_SERVER
const agencies = [
    {
        id: 1,
        agencyName: '빅히트 엔터테인먼트',
        businessNumber: 1112233333,
        bossName: '방시혁',
        mobile: '070-1234-1234',
        adminEmail: 'bts_manager@gmail.com',
        imageURL: '',
    },
    {
        id: 2,
        agencyName: '이담 엔터테인먼트',
        businessNumber: 1112233333,
        bossName: '아이유',
        mobile: '070-1234-1234',
        adminEmail: 'edam@gmail.com',
        imageURL: '',
    },
    {
        id: 3,
        agencyName: '숲 엔터테인먼트',
        businessNumber: 1112233333,
        bossName: '김대표',
        mobile: '070-1234-1234',
        adminEmail: 'forest@gmail.com',
        imageURL: '',
    },
];

// 전체 소속사 불러오기
export const getAgencies = async () => {
    const response = await axios.get(`${api}/api/admin/agencies`)
    .then(res => {
        return res.data
    }).catch(err => {
        alert('데이터 못가져옴')
        return agencies;
    })
    return response;
}

// select 소속사
export const getAgenciesBySelectList = async (select) => {
    const response = await axios.get(`${api}/api/admin/agencies`, select)
    .then(res => {
        return res.data
    })
    .catch(err => {
        alert('데이터 못가져옴')
        return agencies;
    })
}