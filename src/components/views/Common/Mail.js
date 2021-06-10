import React from 'react';
import BackgroundBlur from './Background';
import { initialOpenState } from '../NavBar/Header';
import '../../scss/MailForm.scss';

function Mail({ state, dispatch }) {
    const closeGetMail = () => {
        dispatch({ type: 'GETMAIL', open: { ...initialOpenState, getMail: !state.getMail }})
    }
    const openMailForm = () => {
        dispatch({ type: 'MAILFORM', open: { ...initialOpenState, mailForm: !state.mailForm }})
    }

    return (
        <BackgroundBlur>
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
        </BackgroundBlur>
    )
}

export default Mail;