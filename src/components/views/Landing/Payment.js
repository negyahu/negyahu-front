import React from 'react';
import '../../scss/landing/Payment.scss';

function Payment() {
    return (
        <section className="main-section">
            <h1 className="pay-title pay-text">아티스트의 모든 것</h1>
            <div className="pay-images-area">
                <article className="pay-image color-red hideme">
                    <img src="/resources/images/pay/play.png" alt="" />
                    <h3 className="img-text pay-text">무제한 시청</h3>
                </article>
                <article className="pay-image color-yellow hideme">
                    <img src="/resources/images/pay/comments.png" alt="" />
                    <h3 className="img-text pay-text">다이렉트 소통</h3>
                </article>
            </div>
            <h3 className="pay-comment pay-text hideme">내 최애 아티스트의 비하인드영상 무제한 시청과<br />실시간 알림(피드)를 통한 소통까지</h3>
            <h2 className="pay-comment pay-text hideme">원해? 구독!</h2>
            <div id="selectSubscription" className="hideme">
                <article className="pay-rec pay-one-month">
                    <img className="pay-icon" src="/resources/images/pay/seed-white.png" alt=""/>
                    <h2 className="pay-date date one-month">1개월 간</h2>
                    <h5 className="pay-date">(30% 이벤트 할인 적용 중)</h5>
                    <input type="hidden" className="plan" value="1" />
                </article>
                <article className="pay-rec pay-six-month">
                    <img className="pay-icon pay-icon2" src="/resources/images/pay/brands-white.png" alt=""/>
                    <h2 className="pay-date date six-month">6개월 간</h2>
                    <h5 className="pay-date" >(40% 이벤트 할인 적용 중)</h5>
                    <input type="hidden" className="plan" value="6" />
                </article>
                <article className="pay-rec pay-subscription">
                    <img className="pay-icon" src="/resources/images/pay/carrot-white.png" alt="" />
                    <h2 className="pay-date date subscription">12개월 간</h2>
                    <h5 className="pay-date">(50% 이벤트 할인 적용 중)</h5>
                    <input type="hidden" class="plan" value="12" />
                </article>
            </div>
            <div id="confirmSubscription" className="hideme">
                <img src="/resources/images/pay/carrot-white.png" alt="" />
                <h1>정기구독<sub><s>원가 8,000원</s><span>(35% 이벤트 할인)</span></sub></h1>
                <h2 class="pay-text pay-month">월 5,200원</h2>
                <h2>구독하시겠습니까?</h2>
            </div>
            <div className="subscription-btn-area hideme">
                <button className="subscription-btn">구독하기</button>
            </div>
            <div id="paymentInformation">
                <div className="payment-info">
                    <table>
                    <tr>
                        <th>아이디</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>결제플랜</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>구독기간</th>
                        <td></td>
                    </tr>
                    </table>
                    <aside>
                        <p>결제금액</p>
                        <b className="pay-text total-pay">5,200원</b>
                    </aside>
                </div>
                <div className="payment-choice">
                    <button className="payment-btn">결제하기</button>
                    <button className="payment-cancel-btn">취소하기</button>
                </div>
            </div>
        </section>
    );
}

export default Payment;