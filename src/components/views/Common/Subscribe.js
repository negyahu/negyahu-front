import React, { useState } from 'react';
import { RiInformationFill } from 'react-icons/ri';
import '../../scss/common/Subscribe.scss';
import { IconContainer } from './Components';

function Subscribe() {
    const [NickName, setNickName] = useState('');
    const [openGuide, setOpenGuide] = useState(false);
    
    const onChangeNickNameHandler = (e) => {
        setNickName(e.currentTarget.value)
    }
    const onCheckNickNameHandler = (e) => {
        if (e.key === 'Enter') {
            setOpenGuide(false)
            // 닉네임 중복확인
        } else if (e.code === 'Backspace') {
            setOpenGuide(false)
        } else {
            setOpenGuide(true)
            setTimeout(() => {
                setOpenGuide(false)
            }, 2000)
        }
    }

    return (
        <section className="subscribeSection">
            <h3>당신의 최.애.ARTIST를 구독하여 최신 CONTENTS를 만나보세요:)</h3>
            <h3>사용하실 닉네임을 입력하세요!</h3>
            <section className="subscribeContainer">
                <img src="/resources/images/account/profile_sub_1.png" alt="구독이미지" />
                <div className="inputContainer">
                    <label>닉네임</label>
                    <input 
                        type="text"
                        value={NickName}
                        placeholder="사용하실 닉네임을 입력하세요 (10자 내)"
                        onChange={onChangeNickNameHandler}
                        onKeyUp={onCheckNickNameHandler}
                    />
                    <label className="checkNickName">사용 가능</label>
                </div>
                <div className="subscribeButtonContainer">
                    <button>등록하기</button>
                    <button>취소하기</button>
                </div>
                {
                    openGuide
                    &&
                    <div className="guide">
                        <IconContainer color="#ff8787" style={{ cursor: "default", margin: "0 4px 0 0", transform: "rotate(15deg)" }}>
                            <RiInformationFill />
                        </IconContainer>
                        ENTER를 눌러 닉네임을 확인하세요
                    </div>
                }
            </section>
        </section>
    );
}

export default Subscribe;