import React from 'react';
import { useDispatch } from 'react-redux';

import BackgroundBlur from './Background';
import '../../scss/MailForm.scss';
import { OPEN_GETMAIL, OPEN_MAILFORM } from '../../../_actions/openModules';

function Mail() {
    const dispatch = useDispatch();
    
    return (
        <BackgroundBlur>
            <section className="getMailContainer">
                <div className="getMailByUserInformation">
                    <p className="getMailByUserId">FROM. <span>user</span></p>
                </div>
                <p className="getMailTitle">안녕하세요 메세지제목</p>
                <div className="getMailContent">한번 보내봤습니다 메세지 내용</div>
                <div className="mailButtonController">
                    <button id="mailFormBtn" onClick={() => { dispatch({ type: OPEN_MAILFORM })} }>답장하기</button>
                    <button id="closeMailBtn" onClick={() => { dispatch({ type: OPEN_GETMAIL })}}>취소하기</button>
                </div>
            </section>
        </BackgroundBlur>
    )
}

export default Mail;