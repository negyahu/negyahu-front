import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

import '../scss/Header.scss';
import { IconContext } from 'react-icons/lib';

const NavbarContainer = styled.header`
    width: 100%;
    height: auto;
    box-sizing: border-box;
`;

const Navbar = styled.nav`
    width: 100%;
    height: 90px;
    background: #fbf6f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;
    box-sizing: border-box;
    box-shadow: 0 2px 2px rgba(150, 150, 150, 0.3);
`;

const initialOpenState = {
    notification: false,
    mail: false,
    more: false,
}

function openReducer(state, action) {
    switch (action.type) {
        case 'NOTIFICATION':
            return state = action.open;
        case 'MAIL':
            return state = action.open;
        case 'MORE':
            return state = action.open;
        default:
            throw new Error(`Unhandled action type: ${ action.type }`)
    }
}



function Header() {
    const [login, setLogin] = useState(true);
    const [state, dispatch] = useReducer(openReducer, initialOpenState);
    return (
        <NavbarContainer>
            <Navbar>
                <p className="logo">FANTIMATE</p>
                <div className="menuContainer">
                    {
                        login 
                        ? 
                        <>
                            <SearchArtist />
                            <LoginMenuIcons state={ state } dispatch={ dispatch } />
                        </> 
                        : <NoneLoginMenuIcons />
                    }
                </div>
            </Navbar>
            {
                state.notification && <Notifications />
            }
            {
                state.mail && <Mails />
            }
            {
                state.more && <MoreMenus />
            }
        </NavbarContainer>
    );
}

function LoginMenuIcons({ state, dispatch }) {
    return (
        <>
            <img className="navIcon" src="/resources/icons/user.svg" alt="마이페이지" />
            <img 
                className="navIcon noticeIcon" 
                src="/resources/icons/alarm.svg" 
                alt="알림"
                onClick={() => {
                    dispatch({ type: 'NOTIFICATION', open: { ...initialOpenState, notification: !state.notification } })
                }}
            />
            <div id="alarmCount">0</div>
            <img 
                className="navIcon"
                src="/resources/icons/cart.svg"
                alt="장바구니" 
            />
            <div id="cartCount">0</div>
            <img 
                className="navIcon mailIcon"
                src="/resources/icons/email.svg"
                alt="쪽지"
                onClick={() => {
                    dispatch({ type: 'MAIL', open: { ...initialOpenState, mail: !state.mail } })
                }}
            />
            <div id="mailCount">0</div>
            <img 
                className="navIcon"
                src="/resources/icons/more.svg"
                alt="더보기"
                onClick={() => {
                    dispatch({ type: 'MORE', open: { ...initialOpenState, more: !state.more } })
                }}
            />
        </>
    )
}

function NoneLoginMenuIcons() {
    return (
        <>
            <button id="loginBtn">로그인</button>
            <button id="joinBtn">회원가입</button>
        </>
    )
}

function SearchArtist() {
    return (
        <>
            <input type="checkbox" id="check" />
            <div className="artistSearchContainer">
                <input className="artistSearch" type="text" placeholder="아티스트 검색" />
                <label htmlFor="check">
                    <img className="navIcon" src="/resources/icons/search-icon.svg" alt="돋보기" />
                </label>
                <div className="artistSearchResultContainer">
                    <div className="artistResult">
                        <div className="artistProfile">
                            <img src="" alt="프로필" />
                        </div>
                        <span className="artistName"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

function Notifications() {
    return (
        <div className="notificationsContainer">
            <section className="section notifications">
                <div className="notification">
                    <p>2021-06-01</p>
                    <ul className="ul notification-ul">
                        <li>
                            회원이 작성한 게시글에 좋아요가 달렸습니다.
                            <span>1시간 전</span>
                            <div className="deleteButtonContainer">
                                <IconContext.Provider value={{size: 20, color: 'lightgray'}}>
                                    <FaTrash />
                                </IconContext.Provider>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

function Mails() {
    return (
        <div className="mailsContainer">
            <section className="section mails">
                <div className="mail">
                    <b>전체 쪽지 목록</b>
                    <ul className="ul mail-ul">
                        <p className="getMailDate">2021-06-01</p>
                        <li>
                            <p className="getMailById">user</p>
                            님으로부터 쪽지를 받았습니다.
                            <p className="getMailByTime">2021-06-01</p>
                            <p className="isOpenMail">안 읽음</p>
                        </li>
                        <li>
                            <p className="getMailById">user</p>
                            님으로부터 쪽지를 받았습니다.
                            <p className="getMailByTime">2021-06-01</p>
                            <p className="isOpenMail">1시간 전</p>
                        </li>
                    </ul>
                </div> 
            </section>
        </div>
    )
}

function MoreMenus() {
    return (
        <div className="moreMenuContainer">
            <section className="section moreMenus">
                <div className="moreMenu">
                    <ul className="ul menu-ul">
                        <li>요금 플랜</li>
                        <li>공지사항</li>
                        <li>로그아웃</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Header;