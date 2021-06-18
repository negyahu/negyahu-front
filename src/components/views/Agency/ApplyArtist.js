import React, { useRef, useState }from 'react';
import { TiPlus } from 'react-icons/ti';
import { BsFileEarmarkPlus, BsFileEarmarkMinus } from 'react-icons/bs'
import '../../scss/ApplyArtist.scss';
import { ArtistImageDiv } from '../Common/Components';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_CHOOSEMENU, OPEN_CREATE_MEMBER } from '../../../_actions/openModules';
import CreateMember from './CreateMember';
import { useEffect } from 'react';
import { onChangeProfilePhoto } from '../../../utils/functionUtils';
import { getArtistMembers } from '../../../modules/artists';
import Loading from '../Common/Loading';

function ApplyArtist({ history, location }) {
    const { data, loading, error } = useSelector(state => state.artists.artistMembers)
    const openModule = useSelector(state => state.openModules);
    const dispatch = useDispatch();
    const [ArtistNameKR, setArtistNameKR] = useState('');
    const [ArtistNameEN, setArtistNameEN] = useState('');
    const [Display, setDisplay] = useState('off');
    const [File, setFile] = useState('')
    const inputFiles = useRef();

    useEffect(() => {
        console.log("data : ", data)
        console.log("location : ", location)
        // 소속사 및 아티스트 정보 넘겨 받았는지 확인 
        // 넘겨받은 데이터가 있는 경우 변수에 데이터 담아주기
        Object.keys(location.state).includes('name') && setArtistNameEN(location.state.name);
        Object.keys(location.state).includes('nameKR') && setArtistNameKR(location.state.nameKR);

        // 소속 아티스트 멤버정보 불러오기
        Object.keys(location.state).includes('imageId') && dispatch(getArtistMembers(location.state.imageId))
    }, [location.state])

    if (loading) return <Loading />
    if (error) return <div>에러발생</div>

    const onHistoryBack = () => {
        /* eslint-disable-next-line */
        if (confirm('등록을 취소하시겠습니까?')) {
            openModule.common.chooseMenu && dispatch({ type: OPEN_CHOOSEMENU })
            history.push({ pathname: '/agency/artists'})
        }
    }

    const onModifyArtistProfile = () => {
        /* eslint-disable-next-line */
        if (confirm('수정하시겠습니까?')) {
            dispatch({ type: OPEN_CREATE_MEMBER })
        }
    }

    const onDeleteArtistProfile = (e) => {
        /* eslint-disable-next-line */
        if (confirm('삭제하시겠습니까?')) {
            dispatch({ type: OPEN_CREATE_MEMBER })
        }
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
                                    <img src="/resources/images/artists/bts.png" alt="대표사진" />
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
                        data.map(member => {
                            return (
                                <ArtistImageDiv name="re" onClick={onModifyArtistProfile}>
                                    <img src="/resources/images/artists/rm.jpg" alt="아티스트"/>
                                    <div onClick={onDeleteArtistProfile}>
                                        <TiPlus />
                                    </div>
                                </ArtistImageDiv>
                            )
                        })
                        :
                        <div>데이터 없음</div>
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
                        <tr>
                            <td></td>
                            <td>
                                <select name="" id="">
                                    <option value="">전체</option>
                                    <option value="">아티스트</option>
                                    <option value="">스토어</option>
                                    <option value="">오피셜</option>
                                </select>
                            </td>
                            <td>
                                <input type="email" />
                            </td>
                            <td><button>확인</button></td>
                            <td>
                                <div>
                                    <BsFileEarmarkPlus />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <BsFileEarmarkMinus />
                                </div>
                            </td>
                            <td>
                                <select name="" id="">
                                    <option value="">전체</option>
                                    <option value="">아티스트</option>
                                    <option value="">스토어</option>
                                    <option value="">오피셜</option>
                                </select>
                            </td>
                            <td>
                                <input type="email" />
                            </td>
                            <td>
                                <button>확인</button>
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
            <button onClick={onHistoryBack}>취소하기</button>
        </div>
        </>
    );
}

export default ApplyArtist;