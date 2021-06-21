import React, { useRef, useState, useEffect }from 'react';
import { TiPlus } from 'react-icons/ti';
import '../../scss/agency/ApplyArtist.scss';
import { ArtistImageDiv } from '../Common/Components';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_CHOOSEMENU, OPEN_CREATE_MEMBER } from '../../../_actions/openModules';
import CreateMember from './CreateMember';
import { onChangeProfilePhoto } from '../../../utils/functionUtils';
import { KEEP_ARTIST_MEMBER } from '../../../_actions/keepInformation';
import { INITIAL_ARTIST } from '../../../_actions/artists';
import Loading from '../Common/Loading';
import { getAgencyById, getArtistById, getMembersByArtist } from '../../../_reducers/artists';

function ApplyArtist({ history, match, location }) {
    const {data, loading, error} = useSelector(state => state.artists.agency)
    const artist = useSelector(state => state.artists.artist.data)
    const members = useSelector(state => state.artists.members.data)
    const openModule = useSelector(state => state.openModules);
    const dispatch = useDispatch();

    const agencyId = parseInt(match.params.agencyId, 10)

    const [ArtistNameKR, setArtistNameKR] = useState('');
    const [ArtistNameEN, setArtistNameEN] = useState('');
    const [ArtistImageURL, setArtistImageURL] = useState('');
    const [IsBlind, setIsBlind] = useState('off');
    const [File, setFile] = useState('')
    
    const inputFiles = useRef();
    const clickMemberButton = useRef(new Array());

    useEffect(() => {
        // create / modify 구분
        if (!Object.keys(location.state).includes('data')) {
            // data 가 존재하지 않는 경우 create 
            dispatch(getAgencyById(agencyId))
            setArtistImageURL('/resources/images/account/profile.png')
            console.log('create')
        } else {
            // data 가 존재하는 경우 modify
            const artistId = parseInt(match.params.artistId, 10)
            dispatch(getAgencyById(agencyId))
            dispatch(getArtistById(agencyId, artistId))
            dispatch(getMembersByArtist(agencyId, artistId))
            setArtistImageURL(location.state.data.imageURL)
            setArtistNameKR(location.state.data.nameKR)
            setArtistNameEN(location.state.data.nameEN)
            console.log('modify')

        }
        console.log("data : ", data, artist, members)
        console.log("location : ", location)
    }, [dispatch, getAgencyById, getAgencyById, getMembersByArtist])

    if (loading || !data) return <Loading />
    if (error) return <div>에러발생</div>

    const onBackHistory = () => {
        /* eslint-disable-next-line */
        if (confirm('등록을 취소하시겠습니까?')) {
            openModule.common.chooseMenu.open && dispatch({ type: OPEN_CHOOSEMENU })
            dispatch({ type: INITIAL_ARTIST })
            history.push({ pathname: `/agency/${agencyId}/artists`})
        }
    }

    const onModifyArtistProfile = (e, member, i) => {
        if (!clickMemberButton.current[i].contains(e.target)) {
            /* eslint-disable-next-line */
            if (confirm(`${member.nameEN}을 수정하시겠습니까?`)) {
                dispatch({ type: KEEP_ARTIST_MEMBER, payload: member })
                dispatch({ type: OPEN_CREATE_MEMBER })
            }
        }
        
    }

    const onDeleteArtistProfile = (e, member, i) => {
        if (clickMemberButton.current[i].contains(e.target)) {
            /* eslint-disable-next-line */
            if (confirm(`${member.nameEN}을 삭제하시겠습니까? 삭제시 관련 모든 정보가 삭제됩니다`)) {
                alert('삭제했다고 치자')
            }
        }
    }

    return (
        <>
        {
            openModule.create.artist && <CreateMember />
        }
        <div className="enrollArtistInfomation">
            <div className="artistInformationContainer">
                <h2>CREATE ARTIST</h2>
                <div className="artistInfomation">
                    <table>
                        <tbody>
                            <tr>
                                <td rowSpan="3">
                                    <img src={ArtistImageURL} alt="대표사진" />
                                    <input 
                                        type="file"
                                        style={{ display: "none" }}
                                        onChange={onChangeProfilePhoto}
                                        ref={inputFiles}
                                    />
                                </td>
                                <th>AGENCY<br/>NAME</th>
                                <td>{data.agencyName}</td>
                            </tr>
                            <tr>
                                <th>ARTIST<br/>NAME_EN *</th>
                                <td>
                                    <input 
                                        type="text"
                                        value={ArtistNameEN}
                                        placeholder="아티스트 이름 등록(영문)"
                                        onChange={(e) => {setArtistNameEN(e.currentTarget.value)}}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>ARTIST<br/>NAME_KR *</th>
                                <td>
                                    <input 
                                        type="text"
                                        value={ArtistNameKR}
                                        placeholder="아티스트 이름 등록(한글)"
                                        onChange={(e) => {setArtistNameKR(e.currentTarget.value)}}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => {inputFiles.current.click()}}>사진첨부</button>
                                </td>
                                <th>OFF / ON</th>
                                <td>
                                    <div className="toggle-area">
                                        <div className="toggle-switch" tabIndex="0">
                                            <input 
                                                type="checkbox"
                                                id="checkbox-id"
                                                onChange={(e) => {setIsBlind(e.currentTarget.value)}}
                                            />
                                            <label htmlFor="checkbox-id">
                                            <div className="area" aria-hidden="true">
                                                <div className="background">
                                                    <div className="handle"></div>
                                                </div>
                                            </div>
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="artistMemberContainer">
                <h2>CREATE MEMBER</h2>
                <div className="memberContainer">
                    <button
                        className="createMemberButton"
                        onClick={() => {dispatch({ type: OPEN_CREATE_MEMBER })}}
                    >CREATE</button>
                    {
                        members
                        ?
                        members.map((member, i) => {
                            return (
                                <ArtistImageDiv
                                    name={member.nameEN}
                                    onClick={(e) => {onModifyArtistProfile(e, member, i)}}
                                    key={member.id}
                                >
                                    <img src={member.imageURL} alt="아티스트"/>
                                    <div
                                        onClick={(e) => {onDeleteArtistProfile(e, member, i)}}
                                        ref={(e) => {clickMemberButton.current[i] = e}}
                                    >
                                        <TiPlus />
                                    </div>
                                </ArtistImageDiv>
                            )
                        })
                        :
                        <div>CREATE를 클릭하여 멤버를 추가해보세요!</div>
                    }
                    
                </div>
            </div>
        </div>
        
        <div className="applyArtistButtonContainer">
            <button>등록하기</button>
            <button onClick={onBackHistory}>취소하기</button>
        </div>
        </>
    );
}

export default ApplyArtist;