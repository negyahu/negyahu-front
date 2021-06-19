import React, { useRef, useState }from 'react';
import { TiPlus } from 'react-icons/ti';
import { BsFileEarmarkPlus, BsFileEarmarkMinus } from 'react-icons/bs'
import '../../scss/ApplyArtist.scss';
import { ArtistImageDiv } from '../Common/Components';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_CHOOSEMENU, OPEN_CREATE_MEMBER } from '../../../_actions/openModules';
import CreateMember from './CreateMember';
import { useEffect } from 'react';
import { onChangeProfilePhoto, onEmailCheckHandler } from '../../../utils/functionUtils';
import { getArtistMembers } from '../../../modules/artists';
import Loading from '../Common/Loading';
import { KEEP_ARTIST_MEMBER } from '../../../_actions/keepInformation';
import { INITIAL_ARTIST } from '../../../modules/artists';

function ApplyArtist({ history, location }) {
    const { data, loading, error } = useSelector(state => state.artists.artistMembers)
    const managers = useSelector(state => state.artists.artist)
    const openModule = useSelector(state => state.openModules);
    const dispatch = useDispatch();
    const [ArtistNameKR, setArtistNameKR] = useState('');
    const [ArtistNameEN, setArtistNameEN] = useState('');
    const [Display, setDisplay] = useState('off');
    const [File, setFile] = useState('')
    const [ManagerEmail, setManagerEmail] = useState('');
    const [ArtistImageURL, setArtistImageURL] = useState('');
    const inputFiles = useRef();
    const checkEmailButton = useRef(new Array());
    const artistMembers = useRef(new Array());

    useEffect(() => {
        // 소속사 및 아티스트 정보 넘겨 받았는지 확인 
        // 넘겨받은 데이터가 있는 경우 변수에 데이터 담아주기
        Object.keys(location.state).includes('name') && setArtistNameEN(location.state.name);
        Object.keys(location.state).includes('nameKR') && setArtistNameKR(location.state.nameKR);
        Object.keys(location.state).includes('imageURL')
        ? setArtistImageURL(location.state.imageURL)
        : setArtistImageURL('/resources/images/account/profile.png')

        // 소속 아티스트 멤버정보 불러오기
        Object.keys(location.state).includes('imageId') && dispatch(getArtistMembers(location.state.imageId))
        // console.log("data : ", data)
        // console.log("location : ", location)
    }, [location.state, dispatch, setArtistImageURL, setArtistNameEN, setArtistNameKR])

    if (loading) return <Loading />
    if (error) return <div>에러발생</div>

    const onBackHistory = () => {
        /* eslint-disable-next-line */
        if (confirm('등록을 취소하시겠습니까?')) {
            openModule.common.chooseMenu && dispatch({ type: OPEN_CHOOSEMENU })
            dispatch({ type: INITIAL_ARTIST })
            history.push({ pathname: '/agency/artists'})
        }
    }

    const onModifyArtistProfile = (e, member, i) => {
        if (!artistMembers.current[i].contains(e.target)) {
            /* eslint-disable-next-line */
            if (confirm(`${member.name}을 수정하시겠습니까?`)) {
                dispatch({ type: KEEP_ARTIST_MEMBER, payload: member })
                dispatch({ type: OPEN_CREATE_MEMBER })
            }
        }
        
    }

    const onDeleteArtistProfile = (e, member, i) => {
        if (artistMembers.current[i].contains(e.target)) {
            /* eslint-disable-next-line */
            if (confirm(`${member.name}을 삭제하시겠습니까? 삭제시 관련 모든 정보가 삭제됩니다`)) {
                alert('삭제했다고 치자')
            }
        }
    }

    const onChangeEmail = (e) => {
        setManagerEmail(e.currentTarget.value)
        checkEmailButton.current.style.backgroundColor = "#F4D4D4"
        checkEmailButton.current.style.borderColor = "#F4D4D4"
        checkEmailButton.current.innerHTML = "확인"
        checkEmailButton.current.disabled = false
    }

    return (
        <>
        {
            openModule.apply.artist && <CreateMember />
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
                                <td>{location.state.agency}</td>
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
                                            <input type="checkbox" id="checkbox-id" onChange={(e) => {setDisplay(e.currentTarget.value)}}/>
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
                        data
                        ?
                        data[0].members.map((member, i) => {
                            return (
                                <ArtistImageDiv
                                    name={member.name}
                                    onClick={(e) => {onModifyArtistProfile(e, member, i)}}
                                    key={member.id}
                                >
                                    <img src={member.imageURL} alt="아티스트"/>
                                    <div
                                        onClick={(e) => {onDeleteArtistProfile(e, member, i)}}
                                        ref={(e) => {artistMembers.current[i] = e}}
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

        <div className="artistManagerContainer">
            <h2>CREATE MANAGER</h2>
            <div className="tableHeader">
                <table className="table">
                    <colgroup>
                        <col width="12%"/>
                        <col width="22%"/>
                        <col width="40%"/>
                        <col width="14%"/>
                        <col width="12%"/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>삭제</td>
                            <td>권한설정</td>
                            <td>계정등록</td>
                            <td>계정확인</td>
                            <td>추가</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tableBody">
                <table className="table">
                    <colgroup>
                        <col width="12%"/>
                        <col width="22%"/>
                        <col width="40%"/>
                        <col width="14%"/>
                        <col width="12%"/>
                    </colgroup>
                    <tbody>
                        {
                            
                        }
                        <tr>
                            <td>
                                <div>
                                    <BsFileEarmarkMinus />
                                </div>
                            </td>
                            <td>
                                <select>
                                    <option value="">전체</option>
                                    <option value="">아티스트</option>
                                    <option value="">스토어</option>
                                    <option value="">오피셜</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type="email"
                                    value={ManagerEmail}
                                    placeholder="로그인 계정으로 사용할 이메일을 입력하세요"
                                    onChange={onChangeEmail}
                                />
                            </td>
                            <td>
                                <button 
                                    ref={checkEmailButton}
                                    onClick={(e) => {onEmailCheckHandler(ManagerEmail, checkEmailButton.current, setManagerEmail)}}
                                >확인</button>
                            </td>
                            <td>
                                <div>
                                    <BsFileEarmarkPlus />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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