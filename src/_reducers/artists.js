import * as artistsAPI from '../api/artists';
import * as artists_action from '../_actions/artists';
import { createPromiseThunk, createPromiseThunkAgency, createPromiseThunkParams, handleAsyncActions, reducerUtils } from '../utils/asyncUtils';

// 액션 생성함수 생성
// 전체 아티스트 불러오기
export const getArtists = createPromiseThunk(artists_action.GET_ARTISTS, artistsAPI.getArtists);
// 아티스트 데이터 불러오기
export const getArtist = createPromiseThunk(artists_action.GET_ARTIST, artistsAPI.getArtistById);
// 아티스트 멤버 불러오기
export const getArtistMembers = createPromiseThunk(artists_action.GET_ARTIST_MEMBERS, artistsAPI.getArtistMembers);
// 전체 소속사 불러오기
export const getAgency = createPromiseThunkAgency(artists_action.GET_AGENCY, artistsAPI.getAgency);
// 소속사 매니저 불러오기
export const getAgencyManagers = createPromiseThunk(artists_action.GET_AGENCY_MANAGERS, artistsAPI.getAgencyManagers);
// 소속사 아티스트 검색
export const getSearchArtists = createPromiseThunkParams(artists_action.GET_SEARCH_ARTISTS, artistsAPI.getSearchArtists);


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
const getArtistsReducer = handleAsyncActions(artists_action.GET_ARTISTS, 'artists')
// 아티스트 데이터 불러오기
const getArtistReducer = handleAsyncActions(artists_action.GET_ARTIST, 'artist')
// 아티스트 멤버 불러오기
const getArtistMembersReducer = handleAsyncActions(artists_action.GET_ARTIST_MEMBERS, 'artistMembers')
// 전체 소속사 불러오기
const getAgencyReducer = handleAsyncActions(artists_action.GET_AGENCY, 'agency')
// 소속사 매니저 불러오기
const getAgencyManagersReducer = handleAsyncActions(artists_action.GET_AGENCY_MANAGERS, 'agencyManagers')
// 소속사 아티스트 검색
const getSearchArtistsReducer = handleAsyncActions(artists_action.GET_SEARCH_ARTISTS, 'artists')


export default function artists(state = initialState, action) {
    switch (action.type) {
        case artists_action.GET_ARTISTS:
        case artists_action.GET_ARTISTS_SUCCESS:
        case artists_action.GET_ARTISTS_ERROR:
            return getArtistsReducer(state, action)
        case artists_action.GET_ARTIST:
        case artists_action.GET_ARTIST_SUCCESS:
        case artists_action.GET_ARTIST_ERROR:
            return getArtistReducer(state, action)
        case artists_action.GET_AGENCY:
        case artists_action.GET_AGENCY_SUCCESS:
        case artists_action.GET_AGENCY_ERROR:
            return getAgencyReducer(state, action)
        case artists_action.GET_ARTIST_MEMBERS:
        case artists_action.GET_ARTIST_MEMBERS_SUCCESS:
        case artists_action.GET_ARTIST_MEMBERS_ERROR:
            return getArtistMembersReducer(state, action)
        case artists_action.GET_AGENCY_MANAGERS:
        case artists_action.GET_AGENCY_MANAGERS_SUCCESS:
        case artists_action.GET_AGENCY_MANAGERS_ERROR:
            return getAgencyManagersReducer(state, action)
        case artists_action.GET_SEARCH_ARTISTS:
        case artists_action.GET_SEARCH_ARTISTS_SUCCESS:
        case artists_action.GET_SEARCH_ARTISTS_ERROR:
            return getSearchArtistsReducer(state, action)
        case artists_action.INITIAL_ARTIST:
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