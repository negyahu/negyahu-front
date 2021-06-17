import React from 'react';
import { useDispatch } from 'react-redux';

import BackgroundBlur from '../Common/Background';
import '../../scss/agency/CreateMember.scss';
import { OPEN_CREATE_MEMBER } from '../../../_actions/openModules'

function CreateMember() {
    const dispatch = useDispatch();

    return (
        <BackgroundBlur>
            <div className="createMemberContainer">
                <h2>CREATE MEMBER</h2>
                <table>
                        <colgroup>
                            <col width="30%"/>
                            <col width="20%"/>
                            <col width="50%"/>
                        </colgroup>
                    <tbody>
                        <tr>
                            <td rowSpan="4">
                                <img src="/resources/images/account/profile.png" alt="프로필" />
                            </td>
                            <th>EMAIL *</th>
                            <td>
                                <input type="text" placeholder="로그인 계정으로 사용할 이메일을 입력하세요"/>
                            </td>
                        </tr>
                        <tr>
                            <th>NAME_EN *</th>
                            <td>
                                <input type="text" placeholder="활동할 예명 또는 실명을 영어로 입력하세요" />
                            </td>
                        </tr>
                        <tr>
                            <th>NAME_KR *</th>
                            <td>
                                <input type="text" placeholder="활동할 예명 또는 실명을 한글로 입력하세요" />
                            </td>
                        </tr>
                        <tr>
                            <th>INSTARGRAM</th>
                            <td>
                                <input type="url" placeholder="https:// 포함하여 주소입력"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>사진첨부</button>
                                <input type="file" style={{ display: "none" }}/>
                            </td>
                            <th>YOUTUBE</th>
                            <td>
                                <input type="url" placeholder="https:// 포함하여 주소입력"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="createMemberButtonContainer">
                    <button>등록하기</button>
                    <button onClick={() => {dispatch({ type: OPEN_CREATE_MEMBER })}}>취소하기</button>
                </div>
            </div>
        </BackgroundBlur>
    );
}

export default CreateMember;