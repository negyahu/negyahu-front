import axios from 'axios';

const api = process.env.REACT_APP_API_SERVER
const sleep = n => new Promise(resolve => setTimeout(resolve, n));
const agencies = [
    {
        id: 1,
        agencyName: '빅히트 엔터테인먼트',
        artists: [
            {
                id: 1,
                name: 'BTS',
                nameKR: '방탄소년단',
                imageURL: '/resources/images/artists/bts.png',
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
                id: 1,
                name: 'AKMU',
                nameKR: '악동뮤지션',
                imageURL: '/resources/images/artists/akmu.jpg',
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
        ],
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
        ],
    },
    {
        id: 2,
        agencyName: '이담 엔터테인먼트',
        artists: [
            {
                id: 2,
                name: 'IU',
                nameKR: '아이유',
                imageURL: '/resources/images/main/artist3.svg',
                members: []
            }
        ],
        managers: []
    },
    {
        id: 3,
        agencyName: '숲 엔터테인먼트',
        artists: [
            {
                id: 1,
                name: 'SEOGANGJUN',
                nameKR: '서강준',
                imageURL: '/resources/images/main/artist5.svg',
                members: []
            },
            {
                id: 2,
                name: 'SUZZI',
                nameKR: '수지',
                imageURL: '/resources/images/main/artist5.svg',
                members: []
            }
        ],
        managers: []
    },
];

// 데이터 불러오기
// 전체 소속사 불러오기
export const getAgencies = async () => {
    return agencies;
}

// id 값으로 소속사 불러오기 (소속사 아티스트들과 매니저 포함)
export const getAgencyById = async id => {
    await sleep(500);
    return agencies.filter(agency => agency.id === id)
}

// 소속사 내 아티스트들 불러오기
export const getArtists = async agencyId => {
    return agencies.filter(agency => {
        return agency.id === agencyId && agency.artists
    })
}

// 소속사 내 아티스트 ID로 불러오기
export const getArtistById = async (agencyId, artistId) => {
    return agencies.filter(agency => {
        return agency.id === agencyId 
        && agency.artists.find(artist => artist.id === artistId)
    })
}

// 소속사 내 아티스트 검색해오기
export const getArtistsBySearchData = (agencyId, searchName) => {
    return agencies.filter(agency => {
        return agency.id === agencyId 
        && agency.artists.filter(artist => (searchName.includes(artist.name) || searchName.includes(artist.nameKR)))
    })
}
// 소속사 내 아티스트 내 멤버 불러오기
export const getMembersByArtist = async (agencyId, artistId) => {
    return agencies.filter(agency => {
        return agency.id === agencyId
        && agency.artists.find(artist => artist.id === artistId)
    })
}

// 소속사 내 아티스트 멤버 ID로 불러오기
export const getMemberById = async (agencyId, artistId, memberId) => {
    return agencies.filter(agency => {
        return agency.id === agencyId
        && agency.artists.filter(artist => {
            return artist.id === artistId
            && artist.members.find(member => {
                return member.id === memberId
            })
        })
    })
}

// 소속사 매니저 불러오기
export const getManagers = async (agencyId) => {
    return agencies.filter(agency => {
        return agency.id === agencyId && agency.managers
    })
}


// 데이터 등록하기
// 소속사 등록하기
export const postApplyAgency = async (formData, config) => {
    const response = await axios.post(`${api}/api/`, formData, config);
    return response;
}

