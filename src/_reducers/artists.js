import * as artistsAPI from '../api/artists';
import * as actions from '../_actions/artists';
import { createPromiseThunk, handleAsyncActions, reducerUtils } from '../utils/asyncUtils';

// 액션 생성함수 생성
// 전체 소속사 불러오기
export const getAgencies = createPromiseThunk(actions.GET_AGENCIES, artistsAPI.getAgencies);
// ID 값으로 특정 소속사 불러오기
export const getAgencyById = createPromiseThunk(actions.GET_AGENCY, artistsAPI.getAgencyById);
// 소속사 내 아티스트들 불러오기
export const getArtists = createPromiseThunk(actions.GET_ARTISTS, artistsAPI.getArtists);
// 소속사 내 아티스트 id로 불러오기
export const getArtistById = createPromiseThunk(actions.GET_ARTIST, artistsAPI.getArtistById);
// 소속사 내 매니저 불러오기
export const getManagers = createPromiseThunk(actions.GET_MANAGERS, artistsAPI.getManagers);
// 소속사 내 아티스트 검색
export const getArtistsBySearchData = createPromiseThunk(actions.GET_ARTISTS_SEARCH, artistsAPI.getArtistsBySearchData);
// 소속사 내 아티스트 멤버 불러오기
export const getMembersByArtist = createPromiseThunk(actions.GET_MEMBERS, artistsAPI.getMembersByArtist);
// 소속사 내 아티스트 멤버 ID로 불러오기
export const getMemberById = createPromiseThunk(actions.GET_MEMBER, artistsAPI.getMemberById)


// 초기 값
const initialState = {
    agencies: reducerUtils.initial(),
    agency: reducerUtils.initial(),
    artists: reducerUtils.initial(),
    artist: reducerUtils.initial(),
    members: reducerUtils.initial(),
    member: reducerUtils.initial(),
    managers: reducerUtils.initial(),
}

// 리듀서 함수 생성
// 전체 소속사 불러오기
const getAgenciesReducer = handleAsyncActions(actions.GET_AGENCIES, 'agencies')
// ID 값으로 특정 소속사 불러오기
const getAgencyByIdReducer = handleAsyncActions(actions.GET_AGENCY, 'agency')
// 소속사 내 아티스트들 불러오기
const getArtistsReducer = handleAsyncActions(actions.GET_ARTISTS, 'artists')
// 소속사 내 아티스트 id로 불러오기
const getArtistReducer = handleAsyncActions(actions.GET_ARTIST, 'artist')
// 소속사 매니저 불러오기
const getManagersReducer = handleAsyncActions(actions.GET_MANAGERS, 'managers')
// 소속사 내 아티스트 검색
const getArtistsBySearchDataReducer = handleAsyncActions(actions.GET_ARTISTS_SEARCH, 'artists')
// 소속사 내 아티스트 멤버 불러오기
const getMembersByArtistReducer = handleAsyncActions(actions.GET_MEMBERS, 'members')
// 소속사 내 아티스트 멤버 ID로 불러오기
const getMemberByIdReducer = handleAsyncActions(actions.GET_MEMBER, 'member')


export default function artists(state = initialState, action) {
    switch (action.type) {
        case actions.GET_AGENCIES:
        case actions.GET_AGENCIES_SUCCESS:
        case actions.GET_AGENCIES_ERROR:
            return getAgenciesReducer(state, action)
        case actions.GET_AGENCY:
        case actions.GET_AGENCY_SUCCESS:
        case actions.GET_AGENCY_ERROR:
            return getAgencyByIdReducer(state, action)
        case actions.GET_ARTISTS:
        case actions.GET_ARTISTS_SUCCESS:
        case actions.GET_ARTISTS_ERROR:
            return getArtistsReducer(state, action)
        case actions.GET_ARTIST:
        case actions.GET_ARTIST_SUCCESS:
        case actions.GET_ARTIST_ERROR:
            return getArtistReducer(state, action)
        case actions.GET_MANAGERS:
        case actions.GET_MANAGERS_SUCCESS:
        case actions.GET_MANAGERS_ERROR:
            return getManagersReducer(state, action)
        case actions.GET_ARTISTS_SEARCH:
        case actions.GET_ARTISTS_SEARCH_SUCCESS:
        case actions.GET_ARTISTS_SEARCH_ERROR:
            return getArtistsBySearchDataReducer(state, action)
        case actions.GET_MEMBERS:
        case actions.GET_MEMBERS_SUCCESS:
        case actions.GET_MEMBERS_ERROR:
            return getMembersByArtistReducer(state, action)
        case actions.GET_MEMBER:
        case actions.GET_MEMBER_SUCCESS:
        case actions.GET_MEMBER_ERROR:
            return getMemberByIdReducer(state, action)
        case actions.INITIAL_ARTIST:
            return {
                ...state,
                artist: reducerUtils.initial(),
                members: reducerUtils.initial(),
                member: reducerUtils.initial(),
                managers: reducerUtils.initial(),
            }
        default:
            return state;
    }
}