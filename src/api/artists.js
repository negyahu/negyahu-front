import axios from 'axios';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const artists = [
    {
        name: 'BTS',
        imageId: 1,
        imageURL: '/resources/images/main/artist1.svg',
    },
    {
        name: 'AKMU',
        imageId: 2,
        imageURL: '/resources/images/main/artist2.svg',
    },
    {
        name: 'IU',
        imageId: 3,
        imageURL: '/resources/images/main/artist3.svg',
    },
    {
        name: 'SUZZI',
        imageId: 4,
        imageURL: '/resources/images/main/artist4.svg',
    },
    {
        name: 'SEOGANGJUN',
        imageId: 5,
        imageURL: '/resources/images/main/artist5.svg',
    },
];

export const getArtists = async () => {
    await sleep(500);
    return artists;
}

export const getArtistById = async id => {
    await sleep(500);
    return artists.find(artist => artist.imageId === id)
}

export const postApplyAgency = async (formData, config) => {
    const response = await axios.post('/api/apply/agency', formData, config);
    return response;
}