import axios from 'axios';

const api = process.env.REACT_APP_API_SERVER
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const artists = [
    {
        name: 'BTS',
        nameKR: '방탄소년단',
        imageId: 1,
        imageURL: '/resources/images/artists/bts.png',
        agency: 'BIGHIT ENTERTAINMENT'
    },
    {
        name: 'AKMU',
        nameKR: '악동뮤지션',
        imageId: 2,
        imageURL: '/resources/images/artists/akmu.jpg',
        agency: 'BIGHIT ENTERTAINMENT'
    },
    {
        name: 'IU',
        nameKR: '아이유',
        imageId: 3,
        imageURL: '/resources/images/main/artist3.svg',
        agency: 'EDAM ENTERTAINMENT'
    },
    {
        name: 'SUZZI',
        nameKR: '수지',
        imageId: 4,
        imageURL: '/resources/images/main/artist4.svg',
        agency: '숲 엔터테인먼트'
    },
    {
        name: 'SEOGANGJUN',
        nameKR: '서강준',
        imageId: 5,
        imageURL: '/resources/images/main/artist5.svg',
        agency: '숲 엔터테인먼트'
    },
];

const artistMembers = [
    {
        imageId: 1,
        members: [
            {
                id: 1,
                email: 'bighit_rm@gmail.com',
                name: 'RM',
                nameKR: '알엠',
                imageURL: '/resources/images/artists/rm.jpg',
                instargram: '',
                youtube: '',
            },
            {
                id: 2,
                email: 'bighit_jk@gmail.com',
                name: 'JK',
                nameKR: '정국',
                imageURL: '/resources/images/artists/jk.jpg',
                instargram: '',
                youtube: '',
            },
            {
                id: 3,
                email: 'bighit_jin@gmail.com',
                name: 'JIN',
                nameKR: '진',
                imageURL: '/resources/images/artists/jin.jpg',
                instargram: '',
                youtube: '',
            },
            {
                id: 4,
                email: 'bighit_hope@gmail.com',
                name: 'JHOPE',
                nameKR: '제이홉',
                imageURL: '/resources/images/artists/hope.jpg',
                instargram: '',
                youtube: '',
            },
            {
                id: 5,
                email: 'bighit_jimin@gmail.com',
                name: 'JIMIN',
                nameKR: '지민',
                imageURL: '/resources/images/artists/jimin.jpg',
                instargram: '',
                youtube: '',
            },
        ]
    },
    {
        imageId: 2,
        members: [
            {
                id: 1,
                email: 'akmu_hyun@gmail.com',
                name: 'SUHYUN',
                nameKR: '수현',
                imageURL: '/resources/images/artists/suhyun.jpg',
                instargram: '',
                youtube: '',
            },
            {
                id: 2,
                email: 'akmu_chan@gmail.com',
                name: 'CHANHYUK',
                nameKR: '찬혁',
                imageURL: '/resources/images/artists/chan.jpg',
                instargram: '',
                youtube: '',
            },
        ]
    },
]

const agencyManagers = [
    {
        imageId: 1,
        managers: [
            {
                id: 1,
                email: 'bighit@gmail.com',
                level: 1,
                password: '1234'
            },
            {
                id: 2,
                email: 'test@gmail.com',
                level: 2,
                password: '1234'
            },
        ]
    }
] 

// 아티스트 불러오기
export const getArtists = async agency => {
    await sleep(500);
    return agency ? artists.filter(artist => artist.agency === agency) : artists
}

// 아티스트 검색해오기
export const getSearchArtists = (agency, name) => {
    return artists.filter(artist => {
        return artist.agency === agency && (artist.name === name || artist.nameKR === name)
    })
}
// 아티스트 멤버 불러오기
export const getArtistMembers = async id => {
    return artistMembers.filter(artist => artist.imageId === id)
} 
// 아티스트 멤버 1명 ID로 불러오기
export const getArtistById = async id => {
    await sleep(500);
    return artists.find(artist => artist.imageId === id)
}

// 소속사 등록하기
export const postApplyAgency = async (formData, config) => {
    const response = await axios.post(`${api}/api/`, formData, config);
    return response;
}

// 소속사 불러오기
export const getAgency = async () => {
    const response = await axios.get(`${api}/api/test`);
    alert(response.data)
    return response;
}

// 소속사 매니저 불러오기
export const getAgencyManagers = async id => {
    return agencyManagers.filter(manager => manager.imageid === id)
}

