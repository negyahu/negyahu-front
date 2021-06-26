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

// 소속사 승인
export const approveAgency = async (sendData) => {
    const config = {
        headers: { "Authorization": sendData.token }
    }
    const state = {
        state: "ACTIVE"
    }
    const response = await axios.patch(`${api}/api/admin/agencies/${sendData.id}`, state, config)
    .then(res => {
        return res.status === 204 ? '완료' : '실패'
    })
    .catch(err => {
        return alert(`승인에 실패하였습니다:\n${err}`)
    })
    return response
}

// 소속사 첨부파일 불러오기
export const getAgencyAttachment = async (sendData) => {
    const config = {
        headers: { "Authorization": sendData.token }
    }
    const response = await axios.get(`${api}/api/licenses/${sendData.id}`, config)
    .then(res => {
        return res
    })
    .catch(err => {
        return alert(`데이터를 불러오지 못했습니다:\n${err}`)
    })
    return response
}