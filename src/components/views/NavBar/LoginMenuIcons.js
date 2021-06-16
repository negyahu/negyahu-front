import React from 'react';
import { useDispatch } from 'react-redux';

import '../../scss/LoginMenuIcons.scss';
import { OPEN_MAIL, OPEN_MORE_MENU, OPEN_NOTIFICATION } from '../../../_actions/openModules';

function LoginMenuIcons() {
    const dispatch = useDispatch();

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
            <img className="navIcon" src="/resources/icons/user.svg" alt="마이페이지" />
            <img 
                className="navIcon noticeIcon" 
                src="/resources/icons/alarm.svg" 
                alt="알림"
                onClick={() => {
                    dispatch({ type: OPEN_NOTIFICATION })
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
                    dispatch({ type: OPEN_MAIL })
                }}
            />
            <div id="mailCount">0</div>
            <img 
                className="navIcon"
                src="/resources/icons/more.svg"
                alt="더보기"
                onClick={() => {
                    dispatch({ type: OPEN_MORE_MENU })
                }}
            />
        </>
    )
}

export default LoginMenuIcons;