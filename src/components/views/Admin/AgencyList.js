import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { MdFiberNew } from 'react-icons/md';
import '../../scss/admin/AgencyList.scss';
import { CheckBoxContainer, IconContainer, SearchContainer } from '../Common/Components';

function AgencyList() {
    
    return (
        <div className="agencyContainer">
            <div>
                <article>
                    <input type="text" placeholder="소속사명 검색" />
                    <div className="searchIcons">
                        <FiSearch />
                    </div>
                </article>
            </div>
            <div className="agencyTableHeader">
                <table>
                    <colgroup>
                        <col width="17%" />
                        <col width="17%" />
                        <col width="12%" />
                        <col width="12%" />
                        <col width="17%" />
                        <col width="17%" />
                        <col width="8%" />
                    </colgroup>
                    <tr>
                        <td>소속사명</td>
                        <td>사업자번호</td>
                        <td>대표자</td>
                        <td>연락처</td>
                        <td>관리자이메일</td>
                        <td>첨부파일</td>
                        <td>승인</td>
                    </tr>
                </table>
            </div>
            <div className="agencyTableBody">
                <table>
                    <colgroup>
                        <col width="17%" />
                        <col width="17%" />
                        <col width="12%" />
                        <col width="12%" />
                        <col width="17%" />
                        <col width="17%" />
                        <col width="8%" />
                    </colgroup>
                    <tr>
                        <td>
                            <IconContainer color="#ffe066" position>
                                <MdFiberNew />
                            </IconContainer>
                            <p>ygEntertainmentwefwefewf</p>
                        </td>
                        <td>000-00-00000</td>
                        <td>김대표</td>
                        <td>010-1234-1234</td>
                        <td>yg@gmail.com</td>
                        <td>bts.jpg</td>
                        <td>
                            <CheckBoxContainer>
                                <input
                                    type="checkbox"
                                    id="acceptTerms"
                                />
                                <span className="checkBoxIcon"></span>
                            </CheckBoxContainer>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default AgencyList;