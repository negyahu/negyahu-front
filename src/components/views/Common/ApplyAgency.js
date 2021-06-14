import React, { useState } from 'react';
import { IoIosHelpCircle } from 'react-icons/io'
import BackgroundBlur from './Background';
import '../../scss/ApplyAgency.scss';
import { AgencyApplicationGuide } from './Components';
import { useDispatch } from 'react-redux';
import { OPEN_APPLY_AGENCY } from '../../../_actions/openModules';


function ApplyAgency() {
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
                                value
                                placeholder="소속사명을 입력하세요"
                                onChange
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>사업자번호</td>
                        <td>
                            <input 
                                type="text"
                                value
                                placeholder="사업자번호를 입력하세요"
                                onChange
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
                                value
                                placeholder="사업자번호를 입력하세요"
                                onChange
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td colSpan="3">
                            <input 
                                type="text"
                                value
                                placeholder="사업자번호를 입력하세요"
                                onChange
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>관리자이메일</td>
                        <td colSpan="3">
                            <input 
                                type="text"
                                value
                                placeholder="사업자번호를 입력하세요"
                                onChange
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>첨부파일</td>
                        <td colSpan="3">
                            <input
                                type="file"
                                placeholder="사업자등록증을 올려주세요"
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