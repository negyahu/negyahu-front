// 전체 소속사 불러오기
export const GET_AGENCIES = 'artists/GET_AGENCIES';
export const GET_AGENCIES_SUCCESS = 'artists/GET_AGENCIES_SUCCESS';
export const GET_AGENCIES_ERROR = 'artists/GET_AGENCIES_ERROR';
// ID 값으로 특정 소속사 불러오기
export const GET_AGENCY_ID = 'artists/GET_AGENCY_ID';
export const GET_AGENCY_ID_SUCCESS = 'artists/GET_AGENCY_ID_SUCCESS';
export const GET_AGENCY_ID_ERROR = 'artists/GET_AGENCY_ID_ERROR';

export const GET_AGENCY = 'artists/GET_AGENCY';
export const GET_AGENCY_SUCCESS = 'artists/GET_AGENCY_SUCCESS';
export const GET_AGENCY_ERROR = 'artists/GET_AGENCY_ERROR';
// 소속사 내 아티스트들 불러오기
export const GET_ARTISTS ='artists/GET_ARTISTS';
export const GET_ARTISTS_SUCCESS ='artists/GET_ARTISTS_SUCCESS';
export const GET_ARTISTS_ERROR ='artists/GET_ARTISTS_ERROR';
// 소속사 내 아티스트 ID로 불러오기
export const GET_ARTIST ='artists/GET_ARTIST';
export const GET_ARTIST_SUCCESS ='artists/GET_ARTIST_SUCCESS';
export const GET_ARTIST_ERROR ='artists/GET_ARTIST_ERROR';
// 소속사 매니저 불러오기
export const GET_MANAGERS = 'artists/GET_MANAGERS';
export const GET_MANAGERS_SUCCESS = 'artists/GET_MANAGERS_SUCCESS';
export const GET_MANAGERS_ERROR = 'artists/GET_MANAGERS_ERROR';
// 소속사 내 아티스트 검색해오기
export const GET_ARTISTS_SEARCH = 'artists/GET_SEARCH_ARTIST';
export const GET_ARTISTS_SEARCH_SUCCESS = 'artists/GET_SEARCH_ARTIST_SUCCESS';
export const GET_ARTISTS_SEARCH_ERROR = 'artists/GET_SEARCH_ARTIST_ERROR';
// 소속사 내 아티스트 멤버 불러오기
export const GET_MEMBERS = 'artists/GET_MEMBERS';
export const GET_MEMBERS_SUCCESS = 'artists/GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_ERROR = 'artists/GET_MEMBERS_ERROR';
// 소속사 내 아티스트 멤버 ID로 불러오기
export const GET_MEMBER = 'artists/GET_MEMBER';
export const GET_MEMBER_SUCCESS = 'artists/GET_MEMBER_SUCCESS';
export const GET_MEMBER_ERROR = 'artists/GET_MEMBER_ERROR';

// 등록 취소시 데이터 정보 지우기
export const INITIAL_ARTIST = 'artists/INITIAL_ARTIST';

// 매니저 row 추가 / 삭제
export const CREATE_MANAGER_TR = 'artists/CREATE_MANAGER_TR';
export const DELETE_MANAGER_TR = 'artists/DELETE_MANAGER_TR';
// 매니저 추가
export const CREATE_MANAGER = 'artists/CREATE_MANAGER';
export const CREATE_MANAGER_SUCCESS = 'artists/CREATE_MANAGER_SUCCESS';
export const CREATE_MANAGER_ERROR = 'artists/CREATE_MANAGER_ERROR';
// 매니저 삭제
export const DELETE_MANAGER = 'artists/DELETE_MANAGER';
export const DELETE_MANAGER_SUCCESS = 'artists/DELETE_MANAGER_SUCCESS';
export const DELETE_MANAGER_ERROR = 'artists/DELETE_MANAGER_ERROR';

// 소속사 아티스트 등록하기
export const CREATE_ARTIST = 'artists/CREATE_ARTIST';
export const CREATE_ARTIST_SUCCESS = 'artists/CREATE_ARTIST_SUCCESS';
export const CREATE_ARTIST_ERROR = 'artists/CREATE_ARTIST_ERROR';