import React from 'react';
import { useDispatch } from 'react-redux';

import '../../scss/Mails.scss';
import { OPEN_GETMAIL } from '../../../_actions/openModules';

function GetMails() {
    const dispatch = useDispatch();
    
    return (
        <ul className="ul mail-ul">
            <p className="getMailDate">2021-06-01</p>
            <li onClick={() => { dispatch({ type: OPEN_GETMAIL }) }}>
                <p className="getMailById">user</p>
                <span>님으로부터 쪽지를 받았습니다</span>
                <p className="getMailByTime">1시간 전</p>
                <p className="isOpenMail">안 읽음</p>
            </li>
            <li onClick={() => { dispatch({ type: OPEN_GETMAIL }) }}>
                <p className="getMailById">user</p>
                <span>님으로부터 쪽지를 받았습니다</span>
                <p className="getMailByTime">2시간 전</p>
                <p className="isOpenMail">읽음</p>
            </li>
        </ul>
    )
}

export default GetMails;