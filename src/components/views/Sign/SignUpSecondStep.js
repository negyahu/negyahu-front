import axios from 'axios';
import React, { useState } from 'react';
import { BiHide } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';

function SignUpSecondStep({ value, setValue }) {
    const [EamilValidation, setEmailValidation] = useState('')
    const [PasswordValidation, setPasswordValidation] = useState('')
    const [ConfirmPasswordValidation, setConfirmPasswordValidation] = useState('')

    const onEmailHandler = (e) => {
        const email = e.currentTarget.value
        setValue.setEmail(email)

        // 유효성 검사 하기
        const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (email === '') {
            setEmailValidation('')
        } else if (!regEmail.test(email)) {
            setEmailValidation('@: 포함하여 이메일 작성')
        } else {
            setEmailValidation('사용할 수 있는 아이디입니다')
        }
    }

    const onPasswordHandler = (e) => {
        const password = e.currentTarget.value
        setValue.setPassword(password)

        // 유효성 검사 하기
        const regPwd = /^(?=.*?[a-z])(?=.*?[0-9]).{4,12}$/;

        if (password === '') {
            setPasswordValidation('')
        } else if (!regPwd.test(password)) {
            setPasswordValidation('영문 소문자 및 숫자 조합 4~12자리')
        } else {
            setPasswordValidation('사용가능한 비밀번호입니다')
        }
        
    }

    const onConfirmPasswordHandler = (e) => {
        const password = e.currentTarget.value
        setValue.setConfirmPassword(password)

        if (value.confirmPassword === '') {
            setConfirmPasswordValidation('')
        } else if (value.password !== password) {
            setConfirmPasswordValidation('입력하신 비밀번호와 일치하지 않습니다')
        } else {
            setConfirmPasswordValidation('입력하신 비밀번호와 일치합니다')
        }
    }

    const onEmailCheckHandler = () => {
        if (EamilValidation === '@포함하여 이메일 작성') {
            return alert('이메일이 유효성에 맞지 않습니다')
        } 
        
        axios.get(`/api/join?email=${ value.email }`).then(response => {
            setValue.setDuplicateEmailCheck(true)
            alert(response)
        }).catch(err => {
            setValue.setDuplicateEmailCheck(true)
            alert(err)
        })
    }

    const onTogglePasswordHandler = () => {
        // 아이콘 클릭시 비밀번호 표시 / 제거
    }

    return (
        <section className="secondStepContainer">
            <p className="guide">이메일, 패스워드를 입력하세요</p>
            <div className="secondInputIdContainer">
                <input
                    type="text" 
                    value={ value.email }
                    placeholder="이메일 입력"
                    onChange={ onEmailHandler }
                    required
                />
                <button type="button" onClick={ onEmailCheckHandler }>중복 확인</button> 
            </div>
            <p className="valid">{ EamilValidation }</p>
            <p className="guideInputPassword">비밀번호는 5-10자의 영문, 숫자를 조합하여 설정해주세요</p>
            <div className="secondInputPwdContainer">
                <input
                    type="password"
                    value={ value.password }
                    placeholder="비밀번호 입력"
                    onChange={ onPasswordHandler }
                    required
                />
                <div className="secondImageContainer">
                    <IconContext.Provider value={{ size: 50 }}>
                        <BiHide />
                    </IconContext.Provider>
                </div>
            </div>
            <p className="valid">{ PasswordValidation }</p>
            <div className="secondInputPwdContainer">
                <input
                    type="password"
                    value={ value.confirmPassword }
                    placeholder="비밀번호 확인"
                    onChange={ onConfirmPasswordHandler }
                    required
                />
                <div className="secondImageContainer">
                    <IconContext.Provider value={{ size: 50 }}>
                        <BiHide />
                    </IconContext.Provider>
                </div>
            </div>
            <p className="valid">{ ConfirmPasswordValidation }</p>
        </section>
    )
}

export default SignUpSecondStep;