import React from 'react';
import { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import { MdFiberNew } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAgencies } from '../../../_reducers/artists';
import '../../scss/admin/AgencyList.scss';
import { IconContainer } from '../Common/Components';
import Loading from '../Common/Loading';

function AgencyList() {
    const { data, loading, error } = useSelector(state => state.artists.agencies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAgencies());
    }, [dispatch])

    if (loading || !data) return <Loading />
    if (error) return alert('잠시 후 다시 접속해주세요')

    const onOpenAttachment = (e) => {

    }

    const onChangeSelectList = (e) => {
        switch (e.target.value) {
            case 'all':
                break
            case 'apply':
            case 'newApply':
            case 'approved':
            case 'notApproved':
            default:
                break
        }
    }

    const onApprove = () => {
        
    }

    return (
        <div className="agencyContainer">
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
                    <col width="8%" />
                </colgroup>
                <thead>
                    <tr>
                        <td>소속사명</td>
                        <td>사업자번호</td>
                        <td>대표자</td>
                        <td>연락처</td>
                        <td>관리자이메일</td>
                        <td>첨부파일</td>
                        <td>승인</td>
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
                        data && 
                        data.map(agency => {
                            return (
                                <tr>
                                    <td>
                                        <div className="div">
                                            <IconContainer size="32px" color="#ff6b6b" style={{ cursor: 'default' }}>
                                                <MdFiberNew />
                                            </IconContainer>
                                            <p>{agency.agencyName}</p>
                                        </div>
                                    </td>
                                    <td>{agency.businessNumber}</td>
                                    <td>{agency.bossName}</td>
                                    <td>{agency.mobile}</td>
                                    <td>{agency.adminEmail}</td>
                                    <td>
                                        <button onClick={onOpenAttachment}>보기</button>
                                    </td>
                                    <td>
                                        <button>승인</button>
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

export default AgencyList;