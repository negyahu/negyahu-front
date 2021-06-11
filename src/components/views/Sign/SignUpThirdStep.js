import React from 'react';

function SignUpThirdStep({ value, setValue }) {
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

export default SignUpThirdStep;