import React, { useState } from 'react';
import { BsFolderPlus } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../scss/agency/CreateOfficial.scss';
import { IconContainer } from '../Common/Components';

function CreateOfficial({ history }) {
    const openModule = useSelector(state => state.openModules)
    const dispatch = useDispatch();

    const [searchOfficial, setSearchOfficial] = useState('');

    const onKeyPress = (e) => {

    }
    const onSearchOfficial = (e) => {

    }
    const onCreateOfficial = () => {

    }
    const onBackHistory = () => {
        /* eslint-disable-next-line */
        if (confirm('이전 페이지로 이동하시겠습니까?')) {
            history.push("/agency")
        }
    }

    return (
        <div className="createOfficialContainer">
            <div className="headerContainer">
                <h2>
                    <div className="div">
                        CREATE OFFICIAL OF BTS
                        <IconContainer size="40px" color="#F4D4D4" style={{ margin: "0px 15px"}}>
                            <BsFolderPlus onClick={onCreateOfficial} />
                        </IconContainer>
                    </div>
                    <IconContainer size="60px" color="#5C5F78" hover style={{ transform: "rotate(30deg)" }}>
                        <TiArrowBack onClick={onBackHistory}/>
                    </IconContainer>
                </h2>
                <article>
                    <input
                        type="text"
                        value={searchOfficial}
                        placeholder="오피셜 제목 검색"
                        onChange={(e) => {setSearchOfficial(e.currentTarget.value)}}
                        onKeyPress={onKeyPress}
                    />
                    <div className="searchIcons">
                        <FiSearch onClick={onSearchOfficial}/>
                    </div>
                </article>
            </div>
            <div className="officialContainer">
            <div className="tableHeader">
                    <table className="table">
                        <colgroup>
                            <col width="14%"/>
                            <col width="20%"/>
                            <col width="14%"/>
                            <col width="14%"/>
                            <col width="14%"/>
                            <col width="14%"/>
                            <col width="8%"/>
                        </colgroup>
                        <thead>
                            <tr>
                                <td>카테고리</td>
                                <td>영상제목</td>
                                <td>유료</td>
                                <td>가격</td>
                                <td>등록일</td>
                                <td>작성자</td>
                                <td>삭제</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tableBody">
                    <table className="table">
                        <colgroup>
                            <col width="14%"/>
                            <col width="20%"/>
                            <col width="14%"/>
                            <col width="14%"/>
                            <col width="14%"/>
                            <col width="14%"/>
                            <col width="8%"/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>
                                    카테고리
                                </td>
                                <td>
                                    영상제목
                                </td>
                                <td>
                                    유료
                                </td>
                                <td>
                                    가격
                                </td>
                                <td>
                                    등록일
                                </td>
                                <td>
                                    작성자
                                </td>
                                <td>
                                    <IconContainer size="25px">
                                        <FaTrash />
                                    </IconContainer>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default withRouter(CreateOfficial);