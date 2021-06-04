/* eslint-disable */
import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';

import './Join.scss';


const userInformation = {
    name: '',
    email: '',
    id: '',
    password: '',
}

function Join() {
    const [step, setStep] = useState(1);

    return (
        <form className="joinFormContainer">
            <header>
                <p>Fantimate Account</p>
                <p>3단계 중 { step }단계</p>
            </header>
            {
                step == 1 && <FirstStep />
            }
            {
                step == 2 && <SecondStep />
            }
            {
                step == 3 && <ThirdStep />
            }
            <div className="joinButtonContainer">
                {
                    step == 4
                    ? <button className="nextBtn" type="button">가입하기</button>
                    : <button className="nextBtn" type="button" onClick={() => { setStep(step + 1) }}>다음</button>
                }
                <button className="backBtn" type="button" onClick={() => {
                    setStep(step - 1)
                }}>뒤로가기</button>
            </div>
        </form>
    );
}

function FirstStep() {
    return (
        <section className="firstStepContainer">
            <p className="title">이름, 이메일을 입력하세요</p>
            <div className="firstInputContainer">
                <input type="text" placeholder="이름 입력" />
                <input type="email" placeholder="이메일 입력" />
                <p className="guide">(-)포함하여 연락처를 입력해주세요.</p>
                <input type="tel" className="thirdInput" placeholder="연락처" />
            </div>
        </section>
    )
}

function SecondStep() {
    return (
        <section className="secondStepContainer">
            <p className="guide">아이디, 패스워드를 입력하세요</p>
            <div className="secondInputIdContainer">
                <input type="text" placeholder="아이디 입력" />
                <button type="button">중복 확인</button> 
            </div>
            <p className="valid">아이디를 입력하세요. (영문 소문자, 숫자만 입력 가능)</p>
            <p className="guideInputPassword">비밀번호는 5-10자의 영문, 숫자를 조합하여 설정해주세요</p>
            <div className="secondInputPwdContainer">
                <input type="password" placeholder="비밀번호 입력" required />
                <div className="secondImageContainer">
                    <IconContext.Provider value={{ size: 50 }}>
                        <BiHide />
                    </IconContext.Provider>
                </div>
            </div>
            <p className="valid">5-10자의 영문, 숫자</p>
            <div className="secondInputPwdContainer">
                <input type="password" placeholder="비밀번호 확인" required />
                <div className="secondImageContainer">
                    <IconContext.Provider value={{ size: 50 }}>
                        <BiHide />
                    </IconContext.Provider>
                </div>
            </div>
            <p className="valid">비밀번호를 다시 입력하세요.</p>
        </section>
    )
}

function ThirdStep() {
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
                <input type="checkbox" id="acceptTerms"/>
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
                <input type="checkbox" id="acceptPrivacyPolicy"/>
                <span className="checkBoxIcon"></span>
                <label htmlFor="acceptPrivacyPolicy">개인정보 수집 및 이용에 동의합니다.</label>
            </label>
        </section>
    )
}


export default Join;