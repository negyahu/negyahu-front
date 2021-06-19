import * as artistsAPI from '../api/artists';
import { createPromiseThunk, createPromiseThunkAgency, createPromiseThunkParams, handleAsyncActions, reducerUtils } from '../utils/asyncUtils';

// 액션 타입 생성
// 전체 아티스트 불러오기
const GET_ARTISTS = 'artists/GET_ARTISTS';
const GET_ARTISTS_SUCCESS = 'artists/GET_ARTISTS_SUCCESS';
const GET_ARTISTS_ERROR = 'artists/GET_ARTISTS_ERROR';
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
// 소속사 매니저 불러오기
const GET_AGENCY_MANAGERS = 'artist/GET_AGENCY_MANAGER';
const GET_AGENCY_MANAGERS_SUCCESS = 'artist/GET_AGENCY_MANAGER_SUCCESS';
const GET_AGENCY_MANAGERS_ERROR = 'artist/GET_AGENCY_MANAGER_ERROR';
// 취소시 아티스트 데이터 정보 지우기
export const INITIAL_ARTIST = 'artists/INITIAL_ARTIST';
// 소속사 아티스트 검색
const GET_SEARCH_ARTISTS = 'artists/GET_SEARCH_ARTIST';
const GET_SEARCH_ARTISTS_SUCCESS = 'artists/GET_SEARCH_ARTIST_SUCCESS';
const GET_SEARCH_ARTISTS_ERROR = 'artists/GET_SEARCH_ARTIST_ERROR';




// 액션 생성함수 생성
// 전체 아티스트 불러오기
export const getArtists = createPromiseThunk(GET_ARTISTS, artistsAPI.getArtists);
// 아티스트 데이터 불러오기
export const getArtist = createPromiseThunk(GET_ARTIST, artistsAPI.getArtistById);
// 아티스트 멤버 불러오기
export const getArtistMembers = createPromiseThunk(GET_ARTIST_MEMBERS, artistsAPI.getArtistMembers);
// 전체 소속사 불러오기
export const getAgency = createPromiseThunkAgency(GET_AGENCY, artistsAPI.getAgency);
// 소속사 매니저 불러오기
export const getAgencyManagers = createPromiseThunk(GET_AGENCY_MANAGERS, artistsAPI.getAgencyManagers);
// 소속사 아티스트 검색
export const getSearchArtists = createPromiseThunkParams(GET_SEARCH_ARTISTS, artistsAPI.getSearchArtists);


// 초기 값
const initialState = {
    artists: reducerUtils.initial(),
    artist: reducerUtils.initial(),
    agency: reducerUtils.initial(),
    artistMembers: reducerUtils.initial(),
    agencyManagers: reducerUtils.initial(),
}

// 리듀서 함수 생성
// 전체 아티스트 불러오기
const getArtistsReducer = handleAsyncActions(GET_ARTISTS, 'artists')
// 아티스트 데이터 불러오기
const getArtistReducer = handleAsyncActions(GET_ARTIST, 'artist')
// 아티스트 멤버 불러오기
const getArtistMembersReducer = handleAsyncActions(GET_ARTIST_MEMBERS, 'artistMembers')
// 전체 소속사 불러오기
const getAgencyReducer = handleAsyncActions(GET_AGENCY, 'agency')
// 소속사 매니저 불러오기
const getAgencyManagersReducer = handleAsyncActions(GET_AGENCY_MANAGERS, 'agencyManagers')
// 소속사 아티스트 검색
const getSearchArtistsReducer = handleAsyncActions(GET_SEARCH_ARTISTS, 'artists')


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
        case GET_ARTIST_MEMBERS:
        case GET_ARTIST_MEMBERS_SUCCESS:
        case GET_ARTIST_MEMBERS_ERROR:
            return getArtistMembersReducer(state, action)
        case GET_AGENCY_MANAGERS:
        case GET_AGENCY_MANAGERS_SUCCESS:
        case GET_AGENCY_MANAGERS_ERROR:
            return getAgencyManagersReducer(state, action)
        case GET_SEARCH_ARTISTS:
        case GET_SEARCH_ARTISTS_SUCCESS:
        case GET_SEARCH_ARTISTS_ERROR:
            return getSearchArtistsReducer(state, action)
        

        case INITIAL_ARTIST:
            return {
                ...state,
                artist: reducerUtils.initial(),
                artistMembers: reducerUtils.initial(),
                agencyManagers: reducerUtils.initial(),
            }
        default:
            return state;
    }
}