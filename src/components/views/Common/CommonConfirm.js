import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { OPEN_CONFIRM } from '../../../_actions/openModules';
import BackgroundBlur from './Background';

const CommonConfirmContainer = styled.div`
    width: 500px;
    height: 270px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FBF6F6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h2`
    width: 450px;
    height: 55px;
    font-family: Yoon Minguk;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
`;

const Content = styled.p`
    width: 450px;
    height: 90px;
    font-family: Yoon Minguk;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
`;

const ButtonContainer = styled.div`
    width: 450px;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
        width: 130px;
        height: 40px;
        background: #F4D4D4;
        font-style: normal;
        font-size: 20px;
        text-align: center;
        color: #5C5F78;
        border: 1px solid #F4D4D4;
        cursor: pointer;
        text-align: left;
    }
`;

function CommonConfirm({ type, history }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('알림');
    const [content, setContent] = useState('확인하시겠습니까?');
    const [confirm, setConfirm] = useState('확인')
    const [cancel, setCancel] = useState('취소')
    
    const onClick = (type) => {
        switch (type) {
            case 'CREATEARTIST':
                history.push({ pathname: '/artist/apply' })
            default:
                break;
        }
    }

    const onClose = () => {
        dispatch({ type: OPEN_CONFIRM })
    }

    const onConfirm = (type) => {
        switch (type) {
            case 'CREATEARTIST':
                setTitle('CREATE ARTIST')
                setContent('아티스트를 생성하시겠습니까?')
                setConfirm('생성하기')
                setCancel('취소하기')
                break
            case 'CREATEMEMBER':
                setTitle('CREATE MEMBER')
                setContent('아티스트 멤버를 등록하시겠습니까?')
                setConfirm('등록하기')
                setCancel('취소하기')
                break
            default:
                break
        }
        return (
            <BackgroundBlur>
                <CommonConfirmContainer>
                    <Title>{title}</Title>
                    <Content>{content}</Content>
                    <ButtonContainer>
                        <button>{confirm}</button>
                        <button>{cancel}</button>
                    </ButtonContainer>
                </CommonConfirmContainer>
            </BackgroundBlur>
        )
    }
    
    return onConfirm(type)
}

export default withRouter(CommonConfirm);