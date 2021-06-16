import * as artistsAPI from '../api/artists';
import { createPromiseThunk, createPromiseThunkAgency, handleAsyncActions, reducerUtils } from '../utils/asyncUtils';

// 액션 타입 생성
const GET_ARTISTS = 'artists/GET_ARTISTS';
const GET_ARTISTS_SUCCESS = 'artists/GET_ARTISTS_SUCCESS';
const GET_ARTISTS_ERROR = 'artists/GET_ARTISTS_ERROR';

const GET_ARTIST = 'artists/GET_ARTIST';
const GET_ARTIST_SUCCESS = 'artists/GET_ARTIST_SUCCESS';
const GET_ARTIST_ERROR = 'artists/GET_ARTIST_ERROR';

const GET_AGENCY = 'artists/GET_AGENCY';
const GET_AGENCY_SUCCESS = 'artists/GET_AGENCY_SUCCESS';
const GET_AGENCY_ERROR = 'artists/GET_AGENCY_ERROR';


// 액션 생성함수 생성
export const getArtists = createPromiseThunk(GET_ARTISTS, artistsAPI.getArtists);
export const getArtist = createPromiseThunk(GET_ARTIST, artistsAPI.getArtistById);
export const getAgency = createPromiseThunkAgency(GET_AGENCY, artistsAPI.getAgency);

const initialState = {
    artists: reducerUtils.initial(),
    artist: reducerUtils.initial(),
    agency: reducerUtils.initial()
}

const getArtistsReducer = handleAsyncActions(GET_ARTISTS, 'artists')
const getArtistReducer = handleAsyncActions(GET_ARTIST, 'artist')
const getAgencyReducer = handleAsyncActions(GET_AGENCY, 'agency')

export default function artists(state = initialState, action) {
    switch (action.type) {
        case GET_ARTISTS:
        case GET_ARTISTS_SUCCESS:
        case GET_ARTISTS_ERROR:
            return getArtistsReducer(state, action)
        case GET_ARTIST:
        case GET_ARTIST_SUCCESS:
        case GET_ARTIST_ERROR:
            return getArtistReducer(state, action)
        case GET_AGENCY:
        case GET_AGENCY_SUCCESS:
        case GET_AGENCY_ERROR:
            return getAgencyReducer(state, action)
        default:
            return state;
    }
}