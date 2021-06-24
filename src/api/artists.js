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
        artists: [
            {
                id: 1,  // 보내지말고
                nameEN: 'BTS',
                nameKR: '방탄소년단',
                fan: 10480200,
                imageId: 1,
                imageURL: '/resources/images/artists/bts.png',
                isblind: true,
                members: [
                    {
                        id: 1,  // 보내지말고
                        email: 'bighit_rm@gmail.com',
                        nameEN: 'RM',
                        nameKR: '알엠',
                        imageId: 1,
                        imageURL: '/resources/images/artists/rm.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    },
                    {
                        id: 2,
                        email: 'bighit_jk@gmail.com',
                        nameEN: 'JK',
                        nameKR: '정국',
                        imageId: 2,
                        imageURL: '/resources/images/artists/jk.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    },
                    {
                        id: 3,
                        email: 'bighit_jin@gmail.com',
                        nameEN: 'JIN',
                        nameKR: '진',
                        imageId: 3,
                        imageURL: '/resources/images/artists/jin.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    },
                    {
                        id: 4,
                        email: 'bighit_hope@gmail.com',
                        nameEN: 'JHOPE',
                        nameKR: '제이홉',
                        imageId: 4,
                        imageURL: '/resources/images/artists/hope.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    },
                    {
                        id: 5,
                        email: 'bighit_jimin@gmail.com',
                        nameEN: 'JIMIN',
                        nameKR: '지민',
                        imageId: 5,
                        imageURL: '/resources/images/artists/jimin.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    },
                ]
            },
            {
                id: 2,
                nameEN: 'AKMU',
                nameKR: '악동뮤지션',
                fan: 240480,
                imageId: 2,
                imageURL: '/resources/images/artists/akmu.jpg',
                isblind: true,
                members: [
                    {
                        id: 6,
                        email: 'akmu_hyun@gmail.com',
                        nameEN: 'SUHYUN',
                        nameKR: '수현',
                        imageId: 1,
                        imageURL: '/resources/images/artists/suhyun.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    },
                    {
                        id: 7,
                        email: 'akmu_chan@gmail.com',
                        nameEN: 'CHANHYUK',
                        nameKR: '찬혁',
                        imageId: 2,
                        imageURL: '/resources/images/artists/chan.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    },
                ]
            },
        ],
        managers: [
            {
                id: 1,  // 보내지말고
                email: 'bighit@gmail.com',
                name: '방시혁',
                password: '1234',
                mobile: '010-1234-1234',
                level: 'boss',
                artistId: 0, 
            },
            {
                id: 2,
                email: 'test1@gmail.com',
                name: '김매니저',
                password: '1234',
                mobile: '010-1234-1234',
                level: 'manager',
                artistId: 2,
            },
            {
                id: 3,
                email: 'test2@gmail.com',
                name: '김게스트',
                password: '1234',
                mobile: '010-3211-3211',
                level: 'imployee',
                artistId: 999,
            },
        ],
    },
    {
        id: 2,
        agencyName: '이담 엔터테인먼트',
        businessNumber: 1112233333,
        bossName: '아이유',
        mobile: '070-1234-1234',
        adminEmail: 'edam@gmail.com',
        imageURL: '',
        artists: [
            {
                id: 3,
                nameEN: 'IU',
                nameKR: '아이유',
                fan: 240480,
                imageId: 1,
                imageURL: '/resources/images/main/artist3.svg',
                isblind: true,
                members: [
                    {
                        id: 8,
                        email: 'edam_id@gmail.com',
                        nameEN: 'IU',
                        nameKR: '아이유',
                        imageId: 1,
                        imageURL: '/resources/images/artists/suhyun.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    }
                ],
            }
        ],
        managers: []
    },
    {
        id: 3,
        agencyName: '숲 엔터테인먼트',
        businessNumber: 1112233333,
        bossName: '김대표',
        mobile: '070-1234-1234',
        adminEmail: 'forest@gmail.com',
        imageURL: '',
        artists: [
            {
                id: 4,
                nameEN: 'SEOGANGJUN',
                nameKR: '서강준',
                fan: 240480,
                imageId: 1,
                imageURL: '/resources/images/main/artist5.svg',
                isblind: true,
                members: [
                    {
                        id: 9,
                        email: 'forest_jun@gmail.com',
                        nameEN: 'SEOGANGJUN',
                        nameKR: '서강준',
                        imageId: 1,
                        imageURL: '/resources/images/artists/suhyun.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    }
                ]
            },
            {
                id: 5,
                nameEN: 'SUZZI',
                nameKR: '수지',
                fan: 240480,
                imageId: 2,
                imageURL: '/resources/images/main/artist5.svg',
                isblind: true,
                members: [
                    {
                        id: 9,
                        email: 'forest_suzzi@gmail.com',
                        nameEN: 'SUZZI',
                        nameKR: '수지',
                        imageId: 2,
                        imageURL: '/resources/images/artists/suhyun.jpg',
                        password: '',
                        instargram: '',
                        etc: '',
                    }
                ]
            }
        ],
        managers: []
    },
];

// 데이터 불러오기
// 전체 소속사 불러오기
export const getAgencies = async (token) => {
    console.log(token)
    const config = {
        headers: { "Authorization": token, "Content-Type": "multipart/form-data" },
    }
    const response = await axios.get(`${api}/api/admin/agencies`, config)
    .then(res => {
        return res.data
    }).catch(err => {
        alert('에러 발생')
        return agencies;
    })
    return response;
}

// 소속사 로그인시 소속사 정보 불러오기
export const getAgency = async (token) => {
    const response = await axios.get(`${api}/api/agencies/me`, token)
    .then(res => {
        return res.data
    })
    .catch(err => {
        alert('통신 오류!!')
        return agencies
    })
    return response;
}

// id 값으로 소속사 불러오기 (소속사 아티스트들과 매니저 포함)
export const getAgencyById = async id => {
    return agencies.find(agency => agency.id === id)
}

// 소속사 내 아티스트들 불러오기
export const getArtists = async agencyId => {
    return agencyId 
    ? agencies.find(agency => agency.id === agencyId).artists
    : agencies.map(agency => agency)
}

// 소속사 내 아티스트 ID로 불러오기
export const getArtistById = async (agencyId, artistId) => {
    return agencies.find(agency => agency.id === agencyId)
    .artists.find(artist => artist.id === artistId)
}

// 소속사 내 아티스트 검색해오기
export const getArtistsBySearchData = (agencyId, searchName) => {
    return agencies.find(agency => agency.id === agencyId)
    .artists.filter(artist => (searchName === artist.nameEN || searchName === artist.nameKR))
}
// 소속사 내 아티스트 내 멤버 불러오기
export const getMembersByArtist = async (agencyId, artistId) => {
    return agencies.find(agency => agency.id === agencyId)
    .artists.find(artist => artist.id === artistId).members
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
    return agencies.find(agency => agency.id === agencyId).managers.filter(manager => manager)
}

// 사진 업로드
export const agencyUploadFiles = async (file) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const response = await axios.post(`${api}/api/licenses`, file, config)
    .then(res => {
        return res.data.id
    }).catch(err => {
        return err
    })
    return response
}

// 소속사 등록하기
export const createAgency = async (agency) => {
    const response = await axios.post(`${api}/api/agencies/`, agency).then(res => {
        return res.data
    }).catch(err => {
        return err
    })
    return response;
}

// 매니저 등록하기
export const createManager = async (agencyId, manager) => {
    const response = await axios.post(`${api}/api/agencies/${agencyId}/`, manager)
    return response.data
}
// 매니저 삭제하기
export const deleteManager = async (agencyId, managerId) => {
    try {
        const response = await axios.delete(`${api}/api/agencies/${agencyId}/`, managerId)
        return response.data
    } catch (e) {
        alert(e)
        console.log(e)
        return e
    }
}

// 소속 아티스트 등록하기
export const createArtist = async (agencyId, artist) => {
    try {
        const response = await axios.post(`${api}/api/agencies/${agencyId}/artists`)
        return response.data
    } catch (e) {
        alert(e)
        console.log(e)
        return e
    }
 }