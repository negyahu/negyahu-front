import React from 'react';
import { BackgroundColor } from './Header';

function SendMail() {
    return (
        <BackgroundColor>
            <form className="form-send-message">
                <section className="send-message-section">
                    <div className="message-info">
                        <p className="message-id">TO. <span class="to-id"></span></p>
                    </div>
                    <div className="message-input-section">
                        <input type="hidden" className="ref-id" name="refId" value="" />
                        <input type="hidden" className="mess-send-id" name="messSendId" value="" />
                        <input type="hidden" className="mess-rec-id" name="messRecId" value="" />
                        <input type="text" className="message-input-title" name="messTitle" placeholder="제목을 입력하세요" />
                        <textarea className="message-write" placeholder="내용을 입력하세요" name="messContent"></textarea>
                    </div>
                    <div class="message-btn-section">
                        <button type="button" id="sendBtn">보내기</button>
                        <button type="button" id="closeBtn">취소하기</button>
                    </div>
                </section>
            </form>
        </BackgroundColor>
    );
}

export default SendMail;