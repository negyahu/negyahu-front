import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const HeaderLoginButton = styled.button`
    outline: none;
    width: 100px;
    height: 37px;
    border:#F4D4D4;
    background: #F4D4D4;
    border-radius: 10px;
    font-style: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    margin-right: 15px;
    outline: none;
    cursor: pointer;
`;

const HeaderSignUpButton = styled.button`
    outline: none;
    width: 110px;
    height: 37px;
    border: 1px solid #E5D2D2;
    background: #FFFFFF;
    border-radius: 10px;
    font-style: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #E5D2D2;
    outline: none;
    cursor: pointer;
`;


function NoneLoginMenuIcons(props) {
    const onMoveLoginPage = () => {
        props.history.push({ pathname: "/login" })
    }

    const onMoveSignUpPage = () => {
        props.history.push({ pathname: "/join" })
    }
    return (
        <>
            <HeaderLoginButton onClick={onMoveLoginPage}>로그인</HeaderLoginButton>
            <HeaderSignUpButton onClick={onMoveSignUpPage}>회원가입</HeaderSignUpButton>
        </>
    )
}

export default withRouter(NoneLoginMenuIcons);