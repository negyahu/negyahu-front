import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { BsFileEarmarkPlus, BsFileEarmarkMinus } from 'react-icons/bs'
import '../../scss/ApplyArtist.scss';
import { ArtistImageDiv } from '../Common/Components';

function ApplyArtist() {
    return (
        <>
        <div className="applyArtistInformationContainer">
            <h2>아티스트 등록</h2>
            <div className="applyArtistInfomation">
                <img src="/resources/images/main/artist1.svg" alt="대표사진" />
                <table>
                    <tr>
                        <td>아티스트명</td>
                        <td>BTS</td>
                    </tr>
                    <tr>
                        <td>대표이미지</td>
                        <td>BTS.jpg</td>
                    </tr>
                    <tr>
                        <td>노출여부</td>
                        <td>
                            <div className="toggle-area">
                                <div className="toggle-switch" tabIndex="0">
                                    <input type="checkbox" name="my_checkbox" value="yes" id="checkbox-id" />
                                    <label htmlFor="checkbox-id">
                                    <div className="area" aria-hidden="true">
                                        <div className="background">
                                            <div className="handle"></div>
                                        </div>
                                        <p>NO</p>
                                    </div>
                                    </label>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="applyArtistInformationContainer">
            <h2>아티스트 멤버 등록</h2>
            <div className="applyArtist">
                <ArtistImageDiv name="RM">
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </ArtistImageDiv>
                <ArtistImageDiv name="RM">
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </ArtistImageDiv>
                <ArtistImageDiv name="RM">
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </ArtistImageDiv>
                <ArtistImageDiv name="RM">
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </ArtistImageDiv>
                <ArtistImageDiv name="RM">
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </ArtistImageDiv>
                <ArtistImageDiv name="RM">
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </ArtistImageDiv>
                <ArtistImageDiv name="RM">
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </ArtistImageDiv>
                <ArtistImageDiv name="RM">
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </ArtistImageDiv>
                <ArtistImageDiv name="RM">
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </ArtistImageDiv>
                <div className="createArtistMemberContainer">CREATE MEMBER</div>
            </div>
        </div>
        <div className="applyArtistInformationContainer">
            <h2>관리 계정 등록</h2>
            <div className="applyAccountTableHeader">
                <table className="applyAccountTable">
                    <colgroup>
                        <col width="10%"/>
                        <col width="20%"/>
                        <col width="30%"/>
                        <col width="12%"/>
                        <col width="18%"/>
                        <col width="10%"/>
                    </colgroup>
                    <tr>
                        <td>삭제</td>
                        <td>권한설정</td>
                        <td>계정등록</td>
                        <td colSpan="2">계정확인</td>
                        <td>추가</td>
                    </tr>
                </table>
            </div>
            <div className="applyAccountTableBody">
                <table className="applyAccountTable">
                    <colgroup>
                        <col width="10%"/>
                        <col width="20%"/>
                        <col width="30%"/>
                        <col width="12%"/>
                        <col width="18%"/>
                        <col width="10%"/>
                    </colgroup>
                    <tr>
                        <td></td>
                        <td>
                            <select name="" id="">
                                <option value="">전체</option>
                                <option value="">아티스트</option>
                                <option value="">스토어</option>
                                <option value="">오피셜</option>
                            </select>
                        </td>
                        <td>
                            <input type="email" />
                        </td>
                        <td><button>계정확인</button></td>
                        <td><label>사용가능</label></td>
                        <td>
                            <div>
                                <BsFileEarmarkPlus />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <BsFileEarmarkMinus />
                            </div>
                        </td>
                        <td>
                            <select name="" id="">
                                <option value="">전체</option>
                                <option value="">아티스트</option>
                                <option value="">스토어</option>
                                <option value="">오피셜</option>
                            </select>
                        </td>
                        <td>
                            <input type="email" />
                        </td>
                        <td>
                            <button>계정확인</button>
                        </td>
                        <td>
                            <label>사용가능</label>
                        </td>
                        <td>
                            <div>
                                <BsFileEarmarkPlus />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="applyArtistButtonContainer">
            <button>등록하기</button>
            <button>취소하기</button>
        </div>
        </>
    );
}

export default ApplyArtist;