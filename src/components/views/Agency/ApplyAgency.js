import React, { useState } from 'react';
import { IoIosHelpCircle } from 'react-icons/io';
import BackgroundBlur from '../Common/Background';
import '../../scss/ApplyAgency.scss';
import { AgencyApplicationGuide } from '../Common/Components';
import { useDispatch } from 'react-redux';
import { OPEN_APPLY_AGENCY } from '../../../_actions/openModules';
import { postApplyAgency } from '../../../api/artists';
import { createAgencyValidation, checkBusinessNumber } from '../../../utils/functionUtils';
import { setDuplicateEmailCheck } from '../../../api/sign';


function ApplyAgency() {
    const dispatch = useDispatch();
    const [AgencyName, setAgencyName] = useState('');
    const [BusinessNumber, setBusinessNumber] = useState('');
    const [BoseName, setBoseName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [FileName, setFileName] = useState('');
    const [Files, setFiles] = useState('');

    const [guide, setGuide] = useState(false)
    const onGuide = () => {
        setGuide(!guide)
    }
   
    const onChangeBusinessNumber = (e) => {
        setBusinessNumber(e.currentTarget.value)
        const button = document.getElementById('checkBusinessNumberButton')
        button.style.backgroundColor = "#F4D4D4"
        button.style.borderColor = "#F4D4D4"
        button.innerHTML = "확인"
        button.disabled = false
    }
    
    const onCheckBusinessNumber = () => {
        // 사업자번호 검사
        if (checkBusinessNumber(BusinessNumber)) {
            alert('확인되었습니다')
            const button = document.getElementById('checkBusinessNumberButton')
            button.style.backgroundColor = "white"
            button.style.borderColor = "white"
            button.innerHTML = "확인완료"
            button.disabled = 'disabled'
        } else {
            alert('사업자번호로 확인되지 않습니다')
            setBusinessNumber('')
        }
    }

    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value)
        const button = document.getElementById('checkEmailButton')
        button.style.backgroundColor = "#F4D4D4"
        button.style.borderColor = "#F4D4D4"
        button.innerHTML = "확인"
        button.disabled = false
    }

    const onEmailCheckHandler = () => {
        const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (!regEmail.test(Email)) {
            return alert('올바른 이메일을 입력해주세요')
        } 
        
        setDuplicateEmailCheck(Email).then(response => {
            alert(`사용가능한 이메일입니다.`)
            const button = document.getElementById('checkEmailButton');
            button.style.backgroundColor = "white"
            button.style.borderColor = "white"
            button.innerHTML = "확인완료"
            button.disabled = 'disabled'
        }).catch(err => {
            alert(`사용중인 이메일입니다.`)
            setEmail('')
        })
    }

    const onChangeFiles = (e) => {
        let files = e.target.files;
        if (files.length === 0) {
            setFileName('')
        } else {
            setFileName(files[0].name)
            setFiles(files)
        }
    }

    const onSubmitHandler = () => {
        // 유효성 검사 후 진행
        if (createAgencyValidation({AgencyName, BusinessNumber, BoseName, Email, Files})) {
            const businessButton = document.getElementById('checkBusinessNumberButton');
            const emailButton = document.getElementById('checkEmailButton');
            if (businessButton.textContent === '확인') {
                return alert('사업자번호를 확인하세요')
            } else if (emailButton.textContent === '확인') {
                return alert('이메일 중복 확인하세요')
            }
            // 데이터 전송
            const formData = new FormData();
            formData.append(
                "file",
                Files,
            );
            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            }
            postApplyAgency(formData, config)
            .then(res => {
                
                dispatch({ type: OPEN_APPLY_AGENCY })
            })
            .catch(err => {
                alert(err)
            })
        }
        
    }

    return (
        <BackgroundBlur>
            <div className="applyAgencyContainer">
                <h2>
                    CREATE AGENCY
                    <AgencyApplicationGuide onMouseEnter={onGuide} onMouseLeave={onGuide}>
                        <IoIosHelpCircle />
                    </AgencyApplicationGuide>
                    {
                        guide &&
                        <div className="guideContent">
                            관리자 이메일로 승인여부 발송되며, 승인시 해당 이메일로 로그인가능합니다
                        </div>
                    }
                </h2>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="1">소속사명 *</td>
                            <td colSpan="3">
                                <input 
                                    type="text"
                                    value={AgencyName}
                                    placeholder="소속사명을 입력하세요"
                                    onChange={(e) => {setAgencyName(e.currentTarget.value)}}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>사업자번호 *</td>
                            <td colSpan="2">
                                <input
                                    type="text"
                                    value={BusinessNumber}
                                    placeholder="(-)포함하지 않고 사업자번호를 입력하세요"
                                    onChange={onChangeBusinessNumber}
                                />
                            </td>
                            <td>
                                <button id="checkBusinessNumberButton" onClick={onCheckBusinessNumber}>확인</button>
                            </td>
                        </tr>
                        <tr>
                            <td>대표자 *</td>
                            <td colSpan="3">
                                <input 
                                    type="text"
                                    value={BoseName}
                                    placeholder="대표자명을 입력하세요"
                                    onChange={(e) => {setBoseName(e.currentTarget.value)}}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>연락처 *</td>
                            <td colSpan="3">
                                <input 
                                    type="text"
                                    value={Mobile}
                                    placeholder="연락처를 입력하세요"
                                    onChange={(e) => {setMobile(e.currentTarget.value)}}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>관리자이메일 *</td>
                            <td colSpan="2">
                                <input 
                                    type="text"
                                    value={Email}
                                    placeholder="관리자 이메일을 입력하세요"
                                    onChange={onChangeEmail}
                                />
                            </td>
                            <td>
                                <button id="checkEmailButton" onClick={onEmailCheckHandler}>확인</button>
                            </td>
                        </tr>
                        <tr>
                            <td>첨부파일 *</td>
                            <td colSpan="2">
                                <input 
                                    type="text" 
                                    value={FileName} 
                                    placeholder="파일을 첨부하세요(사업자등록증)" 
                                    disabled
                                />
                            </td>
                            <td>
                                <button type="button" onClick={() => {
                                    document.getElementById('attachment').click();
                                }}>파일첨부</button>
                                <input 
                                    type="file"
                                    id="attachment"
                                    style={{display: "none"}}
                                    onChange={onChangeFiles}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="agencyApplicationButtonContainer">
                    <button onClick={onSubmitHandler}>신청하기</button>
                    <button onClick={() => { dispatch({ type: OPEN_APPLY_AGENCY })}}>취소하기</button>
                </div>
            </div>
        </BackgroundBlur>
    );
}

export default ApplyAgency;