import React from 'react';
import '../../scss/Mails.scss';
import { useDispatch } from 'react-redux';
import { OPEN_SENDMAIL } from '../../../_actions/openModules';

function SendMails() {
    const dispatch = useDispatch();

    return (
        <ul className="ul mail-ul">
            <p className="getMailDate">2021-06-01</p>
            <li onClick={() => { dispatch({ type: OPEN_SENDMAIL }) } }>
                <p className="getMailById">user</p>
                <span>님에게 쪽지를 보냈습니다</span>
                <p className="isOpenMail">안 읽음</p>
            </li>
            <li onClick={() => { dispatch({ type: OPEN_SENDMAIL }) } }>
                <p className="getMailById">user</p>
                <span>님에게 쪽지를 보냈습니다</span>
                <p className="isOpenMail">읽음</p>
            </li>
        </ul>
    )
}

export default SendMails;