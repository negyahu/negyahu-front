import React from 'react';
import { initialOpenState } from './Header';
import '../../scss/Mails.scss';

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

export default GetMails;