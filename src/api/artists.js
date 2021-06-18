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
        member: [
            {
                id: 1,
                name: 'RM',
                nameKR: '알엠',
                imageURL: '/resources/images/artists/rm.jpg'
            },
            {
                id: 2,
                name: 'JK',
                nameKR: '정국',
                imageURL: '/resources/images/artists/jk.jpg'
            },
            {
                id: 3,
                name: 'JIN',
                nameKR: '진',
                imageURL: '/resources/images/artists/jin.jpg'
            },
            {
                id: 4,
                name: 'JHOPE',
                nameKR: '제이홉',
                imageURL: '/resources/images/artists/hope.jpg'
            },
        ]
    },
    {
        imageId: 2,
        member: [
            {
                id: 1,
                name: 'SUHYUN',
                nameKR: '수현',
                imageURL: '/resources/images/artists/rm.jpg'
            },
            {
                id: 2,
                name: 'CHANHYUK',
                nameKR: '찬혁',
                imageURL: '/resources/images/artists/jk.jpg'
            },
        ]
    },
]

export const getArtists = async () => {
    await sleep(500);
    return artists;
}

export const getArtistsByAgency = async agency => {
    await sleep(500);
    return artists.filter(artist => artist.agency === agency);
}

export const getArtistMembers = async id => {
    return artistMembers.filter(artist => artist.imageId === id)
} 

export const getArtistById = async id => {
    await sleep(500);
    return artists.find(artist => artist.imageId === id)
}

export const postApplyAgency = async (formData, config) => {
    const response = await axios.post(`${api}/api/`, formData, config);
    return response;
}

export const getAgency = async () => {
    const response = await axios.get(`${api}/api/test`);
    alert(response.data)
    return response;
}
