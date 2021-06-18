import * as artistsAPI from '../api/artists';
import { createPromiseThunk, createPromiseThunkAgency, handleAsyncActions, reducerUtils } from '../utils/asyncUtils';

// 액션 타입 생성
// 전체 아티스트 불러오기
const GET_ARTISTS = 'artists/GET_ARTISTS';
const GET_ARTISTS_SUCCESS = 'artists/GET_ARTISTS_SUCCESS';
const GET_ARTISTS_ERROR = 'artists/GET_ARTISTS_ERROR';
// 소속사 아티스트 불러오기
const GET_ARTISTS_BY_AGENCY = 'artists/GET_ARTISTS_BY_AGENCY';
const GET_ARTISTS_BY_AGENCY_SUCCESS = 'artists/GET_ARTISTS_BY_AGENCY_SUCCESS';
const GET_ARTISTS_BY_AGENCY_ERROR = 'artists/GET_ARTISTS_BY_AGENCY_ERROR';
// 아티스트 데이터 불러오기
const GET_ARTIST = 'artists/GET_ARTIST';
const GET_ARTIST_SUCCESS = 'artists/GET_ARTIST_SUCCESS';
const GET_ARTIST_ERROR = 'artists/GET_ARTIST_ERROR';
// 아티스트 멤버 불러오기
const GET_ARTIST_MEMBERS = 'artists/GET_ARTIST_MEMBERS';
const GET_ARTIST_MEMBERS_SUCCESS = 'artists/GET_ARTIST_MEMBERS_SUCCESS';
const GET_ARTIST_MEMBERS_ERROR = 'artists/GET_ARTIST_MEMBERS_ERROR';
// 전체 소속사 불러오기
const GET_AGENCY = 'artists/GET_AGENCY';
const GET_AGENCY_SUCCESS = 'artists/GET_AGENCY_SUCCESS';
const GET_AGENCY_ERROR = 'artists/GET_AGENCY_ERROR';



// 액션 생성함수 생성
// 전체 아티스트 불러오기
export const getArtists = createPromiseThunk(GET_ARTISTS, artistsAPI.getArtists);
// 소속사 아티스트 불러오기
export const getArtistsByAgency = createPromiseThunk(GET_ARTISTS_BY_AGENCY, artistsAPI.getArtistsByAgency);
// 아티스트 데이터 불러오기
export const getArtist = createPromiseThunk(GET_ARTIST, artistsAPI.getArtistById);
// 아티스트 멤버 불러오기
export const getArtistMembers = createPromiseThunk(GET_ARTIST_MEMBERS, artistsAPI.getArtistMembers);
// 전체 소속사 불러오기
export const getAgency = createPromiseThunkAgency(GET_AGENCY, artistsAPI.getAgency);


// 초기 값
const initialState = {
    artists: reducerUtils.initial(),
    artist: reducerUtils.initial(),
    agency: reducerUtils.initial(),
    artistsByAgency: reducerUtils.initial(),
    artistMembers: reducerUtils.initial(),
}

// 리듀서 함수 생성
// 전체 아티스트 불러오기
const getArtistsReducer = handleAsyncActions(GET_ARTISTS, 'artists')
// 소속사 아티스트 불러오기
const getArtistsByAgencyReducer = handleAsyncActions(GET_ARTISTS_BY_AGENCY, 'artistsByAgency')
// 아티스트 데이터 불러오기
const getArtistReducer = handleAsyncActions(GET_ARTIST, 'artist')
// 아티스트 멤버 불러오기
const getArtistMembersReducer = handleAsyncActions(GET_ARTIST_MEMBERS, 'artistMembers')
// 전체 소속사 불러오기
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
        case GET_ARTISTS_BY_AGENCY:
        case GET_ARTISTS_BY_AGENCY_SUCCESS:
        case GET_ARTISTS_BY_AGENCY_ERROR:
            return getArtistsByAgencyReducer(state, action)
        case GET_ARTIST_MEMBERS:
        case GET_ARTIST_MEMBERS_SUCCESS:
        case GET_ARTIST_MEMBERS_ERROR:
            return getArtistMembersReducer(state, action)
        default:
            return state;
    }
}