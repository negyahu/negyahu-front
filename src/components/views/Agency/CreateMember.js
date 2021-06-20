import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BackgroundBlur from '../Common/Background';
import '../../scss/agency/CreateMember.scss';
import { OPEN_CREATE_MEMBER } from '../../../_actions/openModules'
import { onChangeProfilePhoto, onEmailCheckHandler } from '../../../utils/functionUtils';
import { useEffect } from 'react';
import { KEEP_ARTIST_MEMBER } from '../../../_actions/keepInformation';

function CreateMember() {
    const member = useSelector(state => state.keepInformation.artist)
    const dispatch = useDispatch();
    const [Email, setEmail] = useState('');
    const [NameEN, setNameEN] = useState('');
    const [NameKR, setNameKR] = useState('');
    const [Instargram, setInstargram] = useState('');
    const [YouTube, setYouTube] = useState('');
    const [ImageURL, setImageURL] = useState('');
    const checkEmailButton = useRef();
    const inputFiles = useRef();

    useEffect(() => {
        if (member) {
            setEmail(member.email)
            setNameEN(member.name)
            setNameKR(member.nameKR)
            setInstargram(member.instargram)
            setYouTube(member.youtube)
            setImageURL(member.imageURL)
        } else {
            setImageURL("/resources/images/account/profile.png")
        }
    },[member, setEmail, setNameEN, setNameKR, setInstargram, setYouTube, setImageURL])

    const onBackHistory = () => {
        dispatch({ type: KEEP_ARTIST_MEMBER, action: null })
        dispatch({ type: OPEN_CREATE_MEMBER })
    }

    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value)
        checkEmailButton.current.style.backgroundColor = "#F4D4D4"
        checkEmailButton.current.style.borderColor = "#F4D4D4"
        checkEmailButton.current.innerHTML = "확인"
        checkEmailButton.current.disabled = false
    }

    return (
        <BackgroundBlur>
            <div className="createMemberContainer">
                <h2>CREATE MEMBER</h2>
                <table>
                        <colgroup>
                            <col width="30%"/>
                            <col width="20%"/>
                            <col width="45%"/>
                            <col width="5%"/>
                        </colgroup>
                    <tbody>
                        <tr>
                            <td rowSpan="4">
                                <img src={ImageURL} alt="프로필" />
                            </td>
                            <th>EMAIL *</th>
                            <td>
                                <input
                                    type="text"
                                    value={Email}
                                    placeholder="로그인 계정으로 사용할 이메일을 입력하세요"
                                    onChange={onChangeEmail}
                                    disabled={member ? true : false}
                                />
                            </td>
                            <td>
                                <button 
                                    ref={checkEmailButton}
                                    onClick={() => {onEmailCheckHandler(Email, checkEmailButton.current, setEmail)}}
                                    disabled={member ? true : false}
                                    style={member && {backgroundColor: 'white'}}
                                >{member ? '확인완료' : '확인'}</button>
                            </td>
                        </tr>
                        <tr>
                            <th>NAME_EN *</th>
                            <td colSpan="2">
                                <input
                                    type="text"
                                    value={NameEN}
                                    placeholder="활동할 예명 또는 실명을 영어로 입력하세요"
                                    onChange={(e) => {setNameEN(e.currentTarget.value)}}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>NAME_KR *</th>
                            <td colSpan="2">
                                <input
                                    type="text"
                                    value={NameKR}
                                    placeholder="활동할 예명 또는 실명을 한글로 입력하세요"
                                    onChange={(e) => {setNameKR(e.currentTarget.value)}}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>INSTARGRAM</th>
                            <td colSpan="2">
                                <input
                                    type="url"
                                    value={Instargram}
                                    placeholder="https:// 포함하여 주소입력"
                                    onChange={(e) => {setInstargram(e.currentTarget.value)}}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => {
                                    inputFiles.current.click()
                                }}>사진첨부</button>
                                <input 
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={(e) => {onChangeProfilePhoto(e)}}
                                    ref={inputFiles}
                                />
                            </td>
                            <th>YOUTUBE</th>
                            <td colSpan="2">
                                <input
                                    type="url"
                                    value={YouTube}
                                    placeholder="https:// 포함하여 주소입력"
                                    onChange={(e) => {setYouTube(e.currentTarget.value)}}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="createMemberButtonContainer">
                    <button>{member ? '수정하기' : '등록하기'}</button>
                    <button onClick={onBackHistory}>취소하기</button>
                </div>
            </div>
        </BackgroundBlur>
    );
}

export default CreateMember;