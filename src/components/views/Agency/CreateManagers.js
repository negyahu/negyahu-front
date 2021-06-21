import React, { useRef, useState } from 'react';
import { BsPersonPlusFill, BsPersonDashFill, BsPersonCheckFill } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';
import { onEmailCheckHandler } from '../../../utils/functionUtils';
import BackgroundBlur from '../Common/Background';
import '../../scss/agency/CreateManagers.scss';
import { IconContainer } from '../Common/Components';
import { useDispatch } from 'react-redux';
import { OPEN_MANAGERS } from '../../../_actions/openModules';

function CreateManagers({ match }) {
    console.log(match)
    const dispatch = useDispatch();
    const [ManagerEmail, setManagerEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Mobile, setMobile] = useState('');
    const checkEmailButton = useRef(new Array());

    const onChangeEmail = (e) => {
        setManagerEmail(e.currentTarget.value)
        checkEmailButton.current.style.backgroundColor = "#F4D4D4"
        checkEmailButton.current.style.borderColor = "#F4D4D4"
        checkEmailButton.current.innerHTML = "확인"
        checkEmailButton.current.disabled = false
    }

    const onBackHistory = () => {
        /* eslint-disable-next-line */
        if (confirm('등록을 취소하시겠습니까?')) {
            dispatch({ type: OPEN_MANAGERS })
        }
    }

    return (
        <BackgroundBlur>
            <div className="artistManagerContainer">
                <h2>CREATE MANAGER</h2>
                <div className="tableHeader">
                    <table className="table">
                        <colgroup>
                            <col width="10%"/>
                            <col width="10%"/>
                            <col width="30%"/>
                            <col width="10%"/>
                            <col width="15%"/>
                            <col width="15%"/>
                            <col width="10%"/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>삭제</td>
                                <td>권한설정</td>
                                <td>계정등록</td>
                                <td>계정확인</td>
                                <td>비밀번호</td>
                                <td>연락처</td>
                                <td>추가</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tableBody">
                    <table className="table">
                        <colgroup>
                            <col width="10%"/>
                            <col width="10%"/>
                            <col width="30%"/>
                            <col width="10%"/>
                            <col width="15%"/>
                            <col width="15%"/>
                            <col width="10%"/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>
                                    <IconContainer size="30px" color="#5C5F78">
                                        <BsPersonDashFill />
                                    </IconContainer>
                                </td>
                                <td>
                                    <select>
                                        <option value="boss">BOSS</option>
                                        <option value="manager">MANAGER</option>
                                        <option value="imployee">IMPLOYEE</option>
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
                                    <input 
                                        type="text"
                                        value={Password}
                                        placeholder="로그인 시 사용할 임시 비밀번호를 입력하세요"
                                        onChange={(e) => {setPassword(e.currentTarget.value)}}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="tel"
                                        value={Mobile}
                                        placeholder="연락처를 입력하세요"
                                        onChange={(e) => {setMobile(e.currentTarget.value)}}
                                    />
                                </td>
                                <td>
                                    <IconContainer size="30px" color="#F4D4D4">
                                        <BsPersonPlusFill />
                                    </IconContainer>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="createManagersButtonContainer">
                <button>등록하기</button>
                <button onClick={onBackHistory}>취소하기</button>
            </div>
        </BackgroundBlur>
    );
}

export default withRouter(CreateManagers);