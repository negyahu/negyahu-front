import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openFindEmail } from '../../../modules/openModules';
import BackgroundBlur from '../Common/Background';

function FindUserEmail() {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('') 
    
    const searchEmail = () => {

        if (name === '') return alert("이름을 입력하세요");
        else if (mobile === '') return alert("연락처를 입력하세요");

    }

    return (
        <BackgroundBlur>
            <section className="findAccountContainer">
                <header>
                    <p>Fantimate Account</p>
                    <p>이메일 찾기</p>
                </header>
                <div className="findAccountInputContainer">
                    <input 
                        type="text"
                        value={name}
                        placeholder="이름 입력"
                        onChange={(e) => { setName(e.currentTarget.value) }}
                    />
                    <input 
                        type="tel"
                        value={mobile}
                        placeholder="연락처 입력 (-) 포함"
                        onChange={(e) => { setMobile(e.currentTarget.value) }}
                    />
                </div>
                <div className="findAccountButtonContainer">
                    <button type="button">이메일 찾기</button>
                    <button type="button" onClick={() => { dispatch(openFindEmail()) }}>뒤로가기</button>
                </div>
            </section>
        </BackgroundBlur>
    )
}

export default FindUserEmail;