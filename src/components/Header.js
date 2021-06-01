import React, { useState } from 'react';
import styled from 'styled-components';
import '../scss/Header.scss';

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

const SearchSection = styled.section`
    display: flex;
    justify-content: flex-end;
`;

function Header() {
    const [login, setLogin] = useState(false)
    
    return (
        <NavbarContainer>
            <Navbar>
                <p className="main-logo">FANTIMATE</p>
                <div className="main-menu">
                    {
                        login 
                        ? 
                        <>
                            <SearchArtist />
                            <LoginMenuIcons />
                        </> 
                        : <NoneLoginMenuIcons />
                    }
                </div>
            </Navbar>
        </NavbarContainer>
    );
}

function LoginMenuIcons() {
    return (
        <>
            <img src="" alt="마이페이지" />
            <img src="" alt="알림" />
            <div id="alarmCount"></div>
            <img src="" alt="쪽지" />
            <div id="mailCount"></div>
            <img src="" alt="장바구니" />
            <div id="cartCount"></div>
            <img src="" alt="더보기"/>
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
            <div className="search-box">
                <input type="text" placeholder="아티스트 검색" id="searchInput" />
                <label for="check">
                    <img className="nav-icon" src="/resources/icons/search-icon.svg" alt="돋보기" />
                </label>
            </div>
        </>
    )
}

export default Header;