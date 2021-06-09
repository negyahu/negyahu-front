import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

import '../../scss/Notifications.scss';

const Remove = styled.div`
    opacity: 0;
    margin-right: 10px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: lightgray;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
`;

const Notification = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ACACAC;
    padding: 20px 0px 10px 22px;
    color: #000000;
    padding-bottom: 20px;
    font-style: normal;
    font-size: 16px;
    cursor: pointer;
    span {
        display: inline-block;
        color:#ACACAC;
        margin-left: 5px;
        font-size: 15px;
        font-weight:540;
    }
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;

function Notifications() {
    return (
        <div className="notificationsContainer">
            <section className="section notifications">
                <div className="notification">
                    <p>2021-06-01</p>
                    <ul className="ul notification-ul">
                        <Notification>
                            회원이 작성한 게시글에 좋아요가 달렸습니다.
                            <span>1시간 전</span>
                            <div className="deleteButtonContainer">
                                <Remove>
                                    <FaTrash />
                                </Remove>
                            </div>
                        </Notification>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Notifications;