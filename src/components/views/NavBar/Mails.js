import React, { useState } from 'react';
import GetMails from './GetMails';
import SendMails from './SendMails';
import '../../scss/Mails.scss';

function Mails() {
    const openMailCategory = (category) => {
        let bTags = document.getElementsByTagName("b");
        for (let i = 0; i < bTags.length; i++) {
            bTags[i].style.color = "lightgray";
        }
        switch (category) {
            case '받은 쪽지':
                bTags[0].style.color = "#000000";
                return <GetMails />
            case '보낸 쪽지':
                bTags[1].style.color = "#000000";
                return <SendMails />
            default:
                throw new Error(`Not Found category: ${ category }`);
        }
    }

    const [category, setCategory] = useState(null);

    return (
        <div className="mailsContainer">
            <section className="section mails">
                <div className="mail">
                    <div className="mailCategory">
                        <b onClick={() => {
                            setCategory(openMailCategory("받은 쪽지"));
                        }}>받은 쪽지 목록</b>
                        <b onClick={() => {
                            setCategory(openMailCategory("보낸 쪽지"));
                        }}>보낸 쪽지 목록</b>
                    </div>
                    {
                        category ? category : <GetMails />
                    }
                </div>
            </section>
        </div>
    )
}

export default Mails;