import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

import './Header.scss';
import { IconContext } from 'react-icons/lib';
import MailForm from './MailForm';
import { withRouter } from 'react-router-dom';

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

export const BackgroundColor = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
`;

export const initialOpenState = {
    notification: false,
    mail: false,
    more: false,
    getMail: false,
    sendMail: false,
    mailForm: false,
}

function openReducer(state, action) {
    switch (action.type) {
        case 'NOTIFICATION': return state = action.open;
        case 'MAIL': return state = action.open;
        case 'MORE': return state = action.open;
        case 'GETMAIL': return state = action.open;
        case 'SENDMAIL': return state = action.open;
        case 'MAILFORM': return state = action.open;
        default: throw new Error(`Unhandled action type: ${ action.type }`)
    }
}



function Header(props) {
    const [login, setLogin] = useState(false);
    const [state, dispatch] = useReducer(openReducer, initialOpenState);
    return (
        <NavbarContainer>
            {
                state.getMail && <Mail state={ state } dispatch={ dispatch } />
            }
            {
                state.mailForm && <MailForm state={ state } dispatch={ dispatch } />
            }
            <Navbar>
                <p className="logo" onClick={() => {
                    props.history.push({ pathname: "/" })
                }}>FANTIMATE</p>
                <div className="menuContainer">
                    {
                        login 
                        ? 
                        <>
                            <SearchArtist />
                            <LoginMenuIcons state={ state } dispatch={ dispatch } />
                        </> 
                        : <NoneLoginMenuIcons history={ props.history } />
                    }
                </div>
            </Navbar>
            {
                state.notification && <Notifications />
            }
            {
                state.mail && <Mails state={ state } dispatch={ dispatch } />
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

function NoneLoginMenuIcons(props) {
    return (
        <>
            <button className="headerLoginBtn" onClick={() => {
                props.history.push({ pathname: "/login" })
            }}>로그인</button>
            <button className="headerJoinBtn" onClick={() => {
                props.history.push({ pathname: "/join" })
            }}>회원가입</button>
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

function Mails({ state, dispatch }) {
    const openMailCategory = (category) => {
        let bTags = document.getElementsByTagName("b");
        for (let i = 0; i < bTags.length; i++) {
            bTags[i].style.color = "lightgray";
        }
        switch (category) {
            case '받은 쪽지':
                bTags[0].style.color = "#000000";
                return <GetMails state={ state } dispatch={ dispatch } />
            case '보낸 쪽지':
                bTags[1].style.color = "#000000";
                return <SendMails state={ state } dispatch={ dispatch } />
            default:
                throw new Error(`Not Found category: ${ category }`);
        }
    }

    const [category, setCategory] = useState(null);

    return (
        <div className="mailsContainer">
            <section className="section mails">
                <div className="mail">
                    <div className="mailCategory">
                        <b onClick={() => {
                            setCategory(openMailCategory("받은 쪽지"));
                        }}>받은 쪽지 목록</b>
                        <b onClick={() => {
                            setCategory(openMailCategory("보낸 쪽지"));
                        }}>보낸 쪽지 목록</b>
                    </div>
                    {
                        category ? category : <GetMails state={ state } dispatch={ dispatch } />
                    }
                </div>
            </section>
        </div>
    )
}

function GetMails({ state, dispatch }) {
    const openGetMail = () => {
        dispatch({ type: 'GETMAIL', open: { ...initialOpenState, getMail: !state.getMail }})
    }
    return (
        <ul className="ul mail-ul">
            <p className="getMailDate">2021-06-01</p>
            <li onClick={ openGetMail }>
                <p className="getMailById">user</p>
                <span>님으로부터 쪽지를 받았습니다</span>
                <p className="getMailByTime">1시간 전</p>
                <p className="isOpenMail">안 읽음</p>
            </li>
            <li onClick={ openGetMail }>
                <p className="getMailById">user</p>
                <span>님으로부터 쪽지를 받았습니다</span>
                <p className="getMailByTime">2시간 전</p>
                <p className="isOpenMail">읽음</p>
            </li>
        </ul>
    )
}

function SendMails({ state, dispatch }) {
    const openGetMail = () => {
        dispatch({ type: 'GETMAIL', open: { ...initialOpenState, getMail: !state.getMail }})
    }
    return (
        <ul className="ul mail-ul">
            <p className="getMailDate">2021-06-01</p>
            <li onClick={ openGetMail }>
                <p className="getMailById">user</p>
                <span>님에게 쪽지를 보냈습니다</span>
                <p className="isOpenMail">안 읽음</p>
            </li>
            <li onClick={ openGetMail }>
                <p className="getMailById">user</p>
                <span>님에게 쪽지를 보냈습니다</span>
                <p className="isOpenMail">읽음</p>
            </li>
        </ul>
    )
}

function Mail({ state, dispatch }) {
    const closeGetMail = () => {
        dispatch({ type: 'GETMAIL', open: { ...initialOpenState, getMail: !state.getMail }})
    }
    const openMailForm = () => {
        dispatch({ type: 'MAILFORM', open: { ...initialOpenState, mailForm: !state.mailForm }})
    }

    return (
        <BackgroundColor>
            <section className="getMailContainer">
                <div className="getMailByUserInformation">
                    <p className="getMailByUserId">FROM. <span>user</span></p>
                </div>
                <p className="getMailTitle">안녕하세요 메세지제목</p>
                <div className="getMailContent">한번 보내봤습니다 메세지 내용</div>
                <div className="mailButtonController">
                    <button id="mailFormBtn" onClick={ openMailForm }>답장하기</button>
                    <button id="closeMailBtn" onClick={ closeGetMail }>취소하기</button>
                </div>
            </section>
        </BackgroundColor>
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

export default withRouter(Header);