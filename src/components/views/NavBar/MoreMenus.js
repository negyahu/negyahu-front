import React from 'react';
import '../../scss/MoreMenus.scss';

function MoreMenus() {
    return (
        <div className="moreMenuContainer">
            <section className="section moreMenus">
                <div className="moreMenu">
                    <ul className="ul menu-ul">
                        <li>요금플랜</li>
                        <li>공지사항</li>
                        <li>로그아웃</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default MoreMenus;