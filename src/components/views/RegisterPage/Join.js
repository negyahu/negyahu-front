import React from 'react';

function Join() {
    return (
        <form>
            <section class="firstStep-section">
                <header class="join-header">
                    <p class="join-title">Fantimate Account</p>
                    <p class="join-steps">6단계 중 1단계</p>
                </header>
                <p class="join-input-title">이름, 이메일을 입력하세요</p>
                <div class="join-input">
                    <input type="text" id="bringName" class="join-input-info" name="name" placeholder="이름 입력" required />
                    <input type="email" class="join-input-info" name="uemail" placeholder="이메일 입력" required />
                </div>
                <div class="join-btn-section">
                    <button class="nextBtn" type="button" onclick="firstStep()">다음</button>
                    <button class="backBtn" type="button">뒤로가기</button>
                </div>
            </section>
        </form>
    );
}

export default Join;