/* eslint-disable */
import axios from 'axios';
import { fixRequestBody } from 'http-proxy-middleware';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { setSignUpUser } from '../../../api/sign';

import '../../scss/Join.scss';
import SignUpFirstStep from './SignUpFirstStep';
import SignUpSecondStep from './SignUpSecondStep';
import SignUpThirdStep from './SignUpThirdStep';


function Join(props) {
    const [step, setStep] = useState(1);
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [AcceptTherms, setAcceptTherms] = useState(false);
    const [AcceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);
    const [DuplicateEmailCheck, setDuplicateEmailCheck] = useState(false);

    const onSubmitHandler = () => {
        alert('가입됨!')

        let body = {
            username: Name,
            email: Email,
            mobile: Mobile,
            password: Password,
        }
        setSignUpUser(body)
        .then(response => alert(response.data.username + "님 환영합니다"))
        .catch(err => alert(err))
    }

    const onClickHandler = () => {
        if(!AcceptTherms || !AcceptPrivacyPolicy) {
            return alert('모든 약관에 동의해야 가입됩니다')
        } else {
            onSubmitHandler()
        }
    }

    const onNextStepHandler = () => {

        const regName = /^(?=.*?[가-힣]).{2,}$/
        const regExp = /^(?=.*?[a-z])(?=.*?[0-9]).{4,12}$/

        switch (step) {
            case 1:
                if (!regName.test(Name)) {
                    return alert('이름을 정확하게 입력하세요')
                } else if (Mobile.indexOf('-') < 3) {
                    return alert('-를 포함하여 연락처를 입력하세요(지역번호 등 포함)')
                } else {
                    setStep(step + 1)
                }
                break;
            case 2:
                if (!DuplicateEmailCheck) {
                    return alert('아이디 중복확인 해주세요')
                } else if (Password !== ConfirmPassword) {
                    return alert('비밀번호가 일치하지 않습니다')
                } else if (!regExp.test(Password)) {
                    return alert('비밀번호 유효성이 맞지 않습니다')
                } else {
                    setStep(step + 1)
                }
                break;
            default:
                break;
        }
        
    }

    const onBackStepHandler = () => {
        switch (step) {
            case 1:
                return setStep(1);
            case 2:
                return setStep(step - 1);
            case 3:
                return setStep(step - 1);
            default:
                setStep(1)
                break;
        }
    }

    const onShowStep = (step) => {
        switch (step) {
            case 1:
                return <SignUpFirstStep 
                            value={{ name: Name, mobile: Mobile }} 
                            setValue={{ setName: setName, setMobile: setMobile }}
                        />
            case 2:
                return <SignUpSecondStep
                            value={{ 
                                email: Email, 
                                password: Password, 
                                confirmPassword: ConfirmPassword, 
                                duplicateEmailCheck: DuplicateEmailCheck 
                            }}
                            setValue={{ 
                                setEmail: setEmail, 
                                setPassword: setPassword, 
                                setConfirmPassword: setConfirmPassword, 
                                setDuplicateEmailCheck: setDuplicateEmailCheck 
                            }}
                        />
            case 3:
                return <SignUpThirdStep
                            value={{ acceptTherms: AcceptTherms, acceptPrivacyPolicy: AcceptPrivacyPolicy }}
                            setValue={{ setAcceptTherms: setAcceptTherms, setAcceptPrivacyPolicy: setAcceptPrivacyPolicy }}
                        />
            default:
                return <SignUpFirstStep
                            value={{ name: Name, mobile: Mobile }} 
                            setValue={{ setName: setName, setMobile: setMobile }}
                        />
        }
    }

    return (
        <form className="joinFormContainer" onSubmit={ onSubmitHandler }>
            <header>
                <p>Fantimate Account</p>
                <p>3단계 중 { step }단계</p>
            </header>
            {
                onShowStep(step)
            }
            <div className="joinButtonContainer">
                {
                    step == 3
                    ? <button className="nextBtn" type="button" onClick={ onClickHandler }>가입하기</button>
                    : <button className="nextBtn" type="button" onClick={ onNextStepHandler }>다음</button>
                }
                <button className="backBtn" type="button" onClick={ onBackStepHandler }>뒤로가기</button>
            </div>
        </form>
    );
}


export default withRouter(Join);