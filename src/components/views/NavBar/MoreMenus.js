import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { OPEN_MORE_MENU } from '../../../_actions/openModules';
import { SET_LOGOUT } from '../../../_actions/sign';
import { getCookie, removeCookie, setCookie } from '../../../utils/cookies';
import '../../scss/MoreMenus.scss';
import { KEEP_USER_INFO } from '../../../_actions/keepInformation';

function MoreMenus({ history }) {
    const userData = useSelector(state => state.keepInformation.user)
    const { data } = useSelector(state => state.sign.login)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userData) {
            dispatch({ type: OPEN_MORE_MENU })
            alert('로그아웃 되었습니다')
            history.push({ pathname: "/" })
        }
    }, [dispatch, userData, history])


    const onPaymentHandler = () => {
        history.push({ pathname: "/payment" })
    }

    const onLogoutHandler = () => {
        setCookie("user", data, -1)
        dispatch({ type: SET_LOGOUT })
        dispatch({ type: KEEP_USER_INFO, data: null })
    }

    return (
        <div className="moreMenuContainer">
            <section className="section moreMenus">
                <div className="moreMenu">
                    <ul className="ul menu-ul">
                        <li onClick={onPaymentHandler}>요금플랜</li>
                        <li>공지사항</li>
                        <li onClick={onLogoutHandler}>로그아웃</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default withRouter(MoreMenus);