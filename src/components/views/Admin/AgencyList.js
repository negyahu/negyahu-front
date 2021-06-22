import React from 'react';
import { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import { MdFiberNew } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAgencies } from '../../../_reducers/artists';
import '../../scss/admin/AgencyList.scss';
import { CheckBoxContainer, IconContainer } from '../Common/Components';
import Loading from '../Common/Loading';

function AgencyList() {
    const { data, loading, error } = useSelector(state => state.artists.agency)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAgencies());
    }, [dispatch])

    if (loading) return <Loading />
    if (error) return alert('잠시 후 다시 접속해주세요')

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
                    {/* {
                        data.map(agency => {
                            return (
                                <tr key={agency.id}>
                                    <td>
                                        <IconContainer color="#ffe066" position>
                                            <MdFiberNew />
                                        </IconContainer>
                                        <p>{agency.agencyName}</p>
                                    </td>
                                    <td>{agency.companyNumber}</td>
                                    <td>{agency.bossName}</td>
                                    <td>{agency.mobile}</td>
                                    <td>{agency.email}</td>
                                    <td>{agency.filename}</td>
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
                            )
                        })
                    } */}
                    <tr>
                        <td>
                            <IconContainer color="#ffe066" position>
                                <MdFiberNew />
                            </IconContainer>
                            <p>아무거나</p>
                        </td>
                        <td>아무거나</td>
                        <td>아무거나</td>
                        <td>아무거나</td>
                        <td>아무거나</td>
                        <td>아무거나</td>
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