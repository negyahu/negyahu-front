import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdFiberNew } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { IconContainer } from '../Common/Components';

function AccountList() {
    const { data, loading, error } = useSelector(state => state.account.user)
    return (
        <div className="accountContainer">
            <div className="selectContainer">
                <select>
                    <option value="all">전체</option>
                    <option value="apply">신청정보</option>
                    <option value="newApply">신규 신청정보</option>
                    <option value="approved">승인 소속사</option>
                    <option value="notApproved">미승인 소속사</option>
                </select>
                <div className="searchContainer">
                    <input type="text" placeholder="소속사명 검색" />
                    <div className="searchIcons">
                        <FiSearch />
                    </div>
                </div>
            </div>
            <div className="agencyTableHeader">
                <table className="table">
                <colgroup>
                    <col width="16%" />
                    <col width="13%" />
                    <col width="9%" />
                    <col width="13%" />
                    <col width="22%" />
                    <col width="11%" />
                </colgroup>
                <thead>
                    <tr>
                        <td>회원이메일</td>
                        <td>이름</td>
                        <td>연락처</td>
                        <td>유료회원</td>
                        <td>가입일</td>
                        <td>종료일</td>
                    </tr>
                </thead>
                </table>
            </div>
            <div className="agencyTableBody">
                <table className="table">
                <colgroup>
                    <col width="16%" />
                    <col width="13%" />
                    <col width="9%" />
                    <col width="13%" />
                    <col width="22%" />
                    <col width="11%" />
                    <col width="8%" />
                </colgroup>
                <tbody>
                    {
                        data.content && 
                        data.content.map((agency, i) => {
                            return (
                                <tr key={agency.id}>
                                    <td>
                                        <div className="div">
                                            <IconContainer size="32px" color="#ff6b6b" style={{ cursor: 'default' }}>
                                                <MdFiberNew />
                                            </IconContainer>
                                            <p>{agency.nameKR}</p>
                                        </div>
                                    </td>
                                    <td>{agency.businessNumber}</td>
                                    <td>{agency.bossName}</td>
                                    <td>{agency.mobile}</td>
                                    <td>{agency.email}</td>
                                    <td>
                                        <button>보기</button>
                                    </td>
                                    <td>
                                        <button>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default AccountList;