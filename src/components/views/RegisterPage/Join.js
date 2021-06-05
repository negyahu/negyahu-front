/* eslint-disable */
import axios from 'axios';
import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import { withRouter } from 'react-router';

import './Join.scss';


function Join(props) {
    const [step, setStep] = useState(1);
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [ID, setID] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [AcceptTherms, setAcceptTherms] = useState(false);
    const [AcceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);
    const [DuplicateEmailCheck, setDuplicateEmailCheck] = useState(false);

    const onSubmitHandler = () => {
        alert('가입됨!')

        let body = {
            name: Name,
            email: Email,
            phone: Phone,
            id: ID,
            password: Password,
        }

        axios.post('/api/accounts', body).then(response => {
            alert(response.data);
            props.history.push({ pathname: '/' })
        }).catch(err => alert(err))

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
                } else if (Phone.indexOf("-") < 3) {
                    return alert('-를 포함하여 연락처를 입력하세요(지역번호 등 포함)')
                } else {
                    setStep(step + 1)
                }
                break;
            case 2:
                if (Email.indexOf("@") < 0 || Email.length < 4) {
                    return alert('@: 이메일 형식에 맞춰 입력하세요')
                } else if (!DuplicateEmailCheck) {
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
                setStep(1)
                break;
            case 2:
            case 3:
                setStep(step - 1)
                break;
            default:
                setStep(1)
        }
    }


    return (
        <form className="joinFormContainer" onSubmit={ onSubmitHandler }>
            <header>
                <p>Fantimate Account</p>
                <p>3단계 중 { step }단계</p>
            </header>
            {
                step == 1 
                && <FirstStep 
                        value={{ name: Name, phone: Phone }} 
                        setValue={{ setName: setName, setPhone: setPhone }}
                    />
            }
            {
                step == 2 
                && <SecondStep 
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
            }
            {
                step == 3 
                && <ThirdStep 
                        value={{ acceptTherms: AcceptTherms, acceptPrivacyPolicy: AcceptPrivacyPolicy }}
                        setValue={{ setAcceptTherms: setAcceptTherms, setAcceptPrivacyPolicy: setAcceptPrivacyPolicy }}
                    />
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

function FirstStep({ value, setValue }) {
    const onNameHandler = (e) => {
        setValue.setName(e.currentTarget.value)
    }

    const onEmailHandler = (e) => {
        setValue.setEmail(e.currentTarget.value)
    }

    const onPhoneHandler = (e) => {
        setValue.setPhone(e.currentTarget.value)
    }

    return (
        <section className="firstStepContainer">
            <p className="title">이름, 이메일을 입력하세요</p>
            <div className="firstInputContainer">
                <input
                    type="text"
                    value={ value.name }
                    placeholder="이름 입력" 
                    onChange={ onNameHandler }
                    required
                />
                <p className="guide">(-)포함하여 연락처를 입력해주세요.</p>
                <input
                    type="tel"
                    className="thirdInput"
                    value={ value.phone }
                    placeholder="연락처" 
                    onChange={ onPhoneHandler }
                    required
                />
            </div>
        </section>
    )
}

function SecondStep({ value, setValue }) {
    const [EamilValidation, setEmailValidation] = useState('')
    const [PasswordValidation, setPasswordValidation] = useState('')
    const [ConfirmPasswordValidation, setConfirmPasswordValidation] = useState('')

    const onEmailHandler = (e) => {
        const email = e.currentTarget.value
        setValue.setEmail(email)

        // 유효성 검사 하기
        const regEmail = /^(?=.*?[a-z])(?=.*?[@])(?=.*?[a-z]).{4,12}$/;

        if (email == '') {
            setEmailValidation('')
        } else if (!regEmail.test(email)) {
            setEmailValidation('@포함하여 이메일 작성')
        } else {
            setEmailValidation('사용할 수 있는 아이디입니다')
        }
    }

    const onPasswordHandler = (e) => {
        const password = e.currentTarget.value
        setValue.setPassword(password)

        // 유효성 검사 하기
        const regPwd = /^(?=.*?[a-z])(?=.*?[0-9]).{4,12}$/;

        if (password == '') {
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

        if (value.confirmPassword == '') {
            setConfirmPasswordValidation('')
        } else if (value.password !== password) {
            setConfirmPasswordValidation('입력하신 비밀번호와 일치하지 않습니다')
        } else {
            setConfirmPasswordValidation('입력하신 비밀번호와 일치합니다')
        }
    }

    const onEmailCheckHandler = () => {
        if (EamilValidation == '@포함하여 이메일 작성') {
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

function ThirdStep({ value, setValue }) {
    const onThermsHandler = (e) => {
        setValue.setAcceptTherms(!value.AcceptTherms)
    }

    const onPrivacyHandler = (e) => {
        setValue.setAcceptPrivacyPolicy(!value.AcceptPrivacyPolicy)
    }
    
    return (
        <section className="thirdStepContainer">
            <div>
                <p className="guide">이용 약관 동의(필수)</p>
                <div className="termsContent">
                    여러분을 환영합니다. Fantimate 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다.
                    본 약관은 다양한 Fantimate 서비스의 이용과 관련하여 Fantimate 서비스를 제공하는 Fantimate 주식회사(이하 Fantimate)와 이를 이용하는 Fantimate 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며,
                    아울러 여러분의 Fantimate 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                    Fantimate 서비스를 이용하시거나 Fantimate 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                </div>
            </div>
            <label className="thirdCheckBoxContainer">
                <input
                    type="checkbox"
                    id="acceptTerms"
                    value={ value.acceptTherms }
                    onClick={ onThermsHandler }
                />
                <span className="checkBoxIcon"></span>
                <label htmlFor="acceptTerms">이용약관에 동의합니다</label>
            </label>
            <div>
                <p className="guide">개인정보 수집 및 이용(필수)</p>
                <div className="termsContent">
                    개인정보보호법에 따라 Fantimate 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니
                    자세히 읽은 후 동의하여 주시기 바랍니다.
                    1. 수집하는 개인정보 이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다.
                    이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.
                </div>
            </div>
            <label className="thirdCheckBoxContainer">
                <input
                    type="checkbox"
                    id="acceptPrivacyPolicy"
                    value={ value.AcceptPrivacyPolicy }
                    onClick={ onPrivacyHandler }
                />
                <span className="checkBoxIcon"></span>
                <label htmlFor="acceptPrivacyPolicy">개인정보 수집 및 이용에 동의합니다.</label>
            </label>
        </section>
    )
}


export default withRouter(Join);