import React from 'react';

function SignUpFirstStep({ value, setValue }) {
    const onNameHandler = (e) => {
        setValue.setName(e.currentTarget.value)
    }

    const onMobileHandler = (e) => {
        setValue.setMobile(e.currentTarget.value)
    }

    return (
        <section className="firstStepContainer">
            <p className="title">이름을 입력하세요</p>
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
                    value={ value.mobile }
                    placeholder="연락처" 
                    onChange={ onMobileHandler }
                    required
                />
            </div>
        </section>
    )
}

export default SignUpFirstStep;