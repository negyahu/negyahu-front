import React from 'react';
import { initialOpenState } from './Header';
import '../../scss/Mails.scss';

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

export default SendMails;