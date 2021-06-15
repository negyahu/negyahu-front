import React, { useState } from 'react';
import { IoIosHelpCircle } from 'react-icons/io'
import BackgroundBlur from './Background';
import '../../scss/ApplyAgency.scss';
import { AgencyApplicationGuide } from './Components';
import { useDispatch } from 'react-redux';
import { OPEN_APPLY_AGENCY } from '../../../_actions/openModules';


function ApplyAgency() {
    const [AgencyName, setAgencyName] = useState('');
    const [CompanyNumber, setCompanyNumber] = useState('');
    const [BoseName, setBoseName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [FileName, setFileName] = useState('');

    const attachment = () => {
        let att = document.getElementById('attachment');
        att.click()
    }

    const fileChange = (e) => {
        var files = e.currentTarget.value;
        setFileName(files.substring(files.lastIndexOf("\\") + 1))

    }

    const [guide, setGuide] = useState(false)
    const onGuide = () => {
        setGuide(!guide)
    }
    const dispatch = useDispatch();

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
                                placeholder="(-)를 포함하여 사업자번호를 입력하세요"
                                onChange={(e) => {setCompanyNumber(e.currentTarget.value)}}
                            />
                        </td>
                        <td>
                            <button>확인</button>
                        </td>
                        <td>
                            <label>확인되었습니다</label>
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
                                placeholder="사업자번호를 입력하세요"
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
                            <button onClick={attachment}>파일첨부</button>
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
                    <button>신청하기</button>
                    <button onClick={() => { dispatch({ type: OPEN_APPLY_AGENCY })}}>취소하기</button>
                </div>
            </div>
        </BackgroundBlur>
    );
}

export default ApplyAgency;