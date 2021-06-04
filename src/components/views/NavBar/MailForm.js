import React from 'react';
import { BackgroundColor, initialOpenState } from './Header';
import './MailForm.scss';

function MailForm({ state, dispatch }) {
    const closeMailForm = () => {
        dispatch({ type: 'SENDMAIL', open: { ...initialOpenState, mailForm: !state.mailForm }})
    }
    return (
        <BackgroundColor>
            <form className="sendMailContainer">
                <div className="sendMailByUserInformation">
                    <p className="sendMailByUserId">TO. <span>user</span></p>
                </div>
                <div className="sendMailInputContainer">
                    <input type="text" className="sendMailTitle" placeholder="제목을 입력하세요" />
                    <textarea className="sendMailContent" placeholder="내용을 입력하세요"></textarea>
                </div>
                <div className="sendMailButtonContainer">
                    <button type="button" id="sendMailBtn">보내기</button>
                    <button type="button" id="closeMailBtn" onClick={ closeMailForm }>취소하기</button>
                </div>
            </form>
        </BackgroundColor>
    );
}

export default MailForm;