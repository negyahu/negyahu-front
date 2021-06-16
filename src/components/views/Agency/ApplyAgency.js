import React, { useState } from 'react';
import { IoIosHelpCircle } from 'react-icons/io'
import BackgroundBlur from '../Common/Background';
import '../../scss/ApplyAgency.scss';
import { AgencyApplicationGuide } from '../Common/Components';
import { useDispatch } from 'react-redux';
import { OPEN_APPLY_AGENCY } from '../../../_actions/openModules';
import { postApplyAgency } from '../../../api/artists';


function ApplyAgency() {
    const dispatch = useDispatch();
    const [AgencyName, setAgencyName] = useState('');
    const [CompanyNumber, setCompanyNumber] = useState('');
    const [BoseName, setBoseName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [FileName, setFileName] = useState('');
    const [Files, setFiles] = useState('');

    const [guide, setGuide] = useState(false)
    const onGuide = () => {
        setGuide(!guide)
    }

    const attachment = () => {
        const att = document.getElementById('attachment');
        att.click()
    }

    const fileChange = (e) => {
        let files = e.target.files;
        setFileName(files[0].name)
        setFiles(files)
    }

    const regName = /^(?=.*?[가-힣a-zA-Z]).{2,}$/
    const regPNo = /^(?=.*?[0-9]).{10}$/
    const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

    const onSubmitHandler = () => {
        if (!regName.test(AgencyName)) {
            return alert('소속사명을 입력하세요')
        } else if (!regPNo.test(CompanyNumber)) {
            return alert('사업자번호를 요구사항에 맞춰 입력하세요')
        } else if (!BoseName) {
            return alert('대표자명을 입력하세요')
        } else if (!regEmail.test(Email)) {
            return alert('이메일을 입력하세요')
        } else if (!Files) {
            return alert('파일(사업자등록증)을 첨부바랍니다')
        }
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

    return (
        <BackgroundBlur>
            <div className="applyAgencyContainer">
                <h2>
                    소속사 가입신청
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
                    <colgroup>
                        <col width="20%"/>
                        <col width="40%"/>
                        <col width="15%"/>
                        <col width="25%"/>
                    </colgroup>
                    <tr>
                        <td colSpan="1">소속사명</td>
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
                        <td>사업자번호</td>
                        <td>
                            <input 
                                type="text"
                                value={CompanyNumber}
                                placeholder="(-)포함하지 않고 사업자번호를 입력하세요"
                                onChange={(e) => {setCompanyNumber(e.currentTarget.value)}}
                            />
                        </td>
                        <td>
                            <button>확인</button>
                        </td>
                        <td>
                            <label></label>
                        </td>
                    </tr>
                    <tr>
                        <td>대표자</td>
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
                        <td>연락처</td>
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
                        <td>관리자이메일</td>
                        <td colSpan="3">
                            <input 
                                type="text"
                                value={Email}
                                placeholder="관리자 이메일을 입력하세요"
                                onChange={(e) => {setEmail(e.currentTarget.value)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>첨부파일</td>
                        <td colSpan="2">
                            <input 
                                type="text" 
                                value={FileName} 
                                placeholder="파일을 첨부하세요(사업자등록증)" 
                                disabled
                            />
                        </td>
                        <td>
                            <button type="button" onClick={attachment}>파일첨부</button>
                            <input 
                                type="file"
                                id="attachment"
                                style={{display: "none"}}
                                onChange={fileChange}
                            />
                        </td>
                    </tr>
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