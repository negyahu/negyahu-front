import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_FIND_PASSWORD } from '../../../_actions/openModules';
import BackgroundBlur from '../Common/Background';

function FindUserPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const searchPwd = (info) => {

        if (email === '') return alert("이메일을 입력하세요");
        else if (name === '') return alert("이름을 입력하세요");

    }

    return (
        <BackgroundBlur>
            <section className="findAccountContainer">
                <header>
                    <p>Fantimate Account</p>
                    <p>비밀번호 찾기</p>
                </header>
                <div className="findAccountInputContainer">
                    <input 
                        type="email" 
                        value={email}
                        placeholder="이메일 입력"
                        onChange={(e) => { setEmail(e.currentTarget.value) }}
                    />
                    <input 
                        type="text"
                        placeholder="이름 입력"
                        onChange={(e) => { setName(e.currentTarget.value) }}
                    />
                </div>
                <div className="findAccountButtonContainer">
                    <button type="button">비밀번호 찾기</button>
                    <button type="button" onClick={() => {dispatch({ type: OPEN_FIND_PASSWORD })}}>뒤로가기</button>
                </div>
            </section>
        </BackgroundBlur>
    )
}

export default FindUserPassword;