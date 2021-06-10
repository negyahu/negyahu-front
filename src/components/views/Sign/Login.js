import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import FindUserEmail from './FindUserEmail';
import FindUserPassword from './FindUserPassword';
import FoundAccount from './FoundAccount';
import { openFindEmail, openFindPassword } from '../../../modules/openModules';
import { setLogin } from '../../../modules/sign';

import '../../scss/Login.scss';


function Login({ history }) {
    const { data } = useSelector(state => state.sign.login);
    const openModule = useSelector(state => state.openModules.sign)
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        let userInfo = {
            email: email,
            password: password
        }
        dispatch(setLogin(userInfo))
        if (data) {
            alert(`${data.login.data.name}님 환영합니다`)
            history.push('/')
        } else {
            alert('데이터를 불러오지 못했습니다 잠시 후 다시 접속하세요', e)
            setEmail('')
            setPassword('')
        }
    }

    

    return (
        <form className="loginFormContainer" onSubmit={ onSubmitHandler }>
            {
                openModule.email && <FindUserEmail />
            }
            {
                openModule.password && <FindUserPassword />
            }
            {
                openModule.foundAccount && <FoundAccount />
            }
            <header className="loginHeader">
                <p>Fantimate Account</p>
                <p>로그인</p>
            </header>
            <div className="accountInputContainer">
                <input 
                    type="email"
                    value={ email } 
                    onChange={ onEmailHandler } 
                    placeholder="이메일을 입력하세요"
                    required
                />
                <input 
                    type="password"
                    value={ password }
                    onChange={ onPasswordHandler }
                    placeholder="비밀번호를 입력하세요"
                    required
                />
            </div>
            <div className="LoginButtonContainer">
                <button className="loginBtn" type="submit">로그인</button>
            </div>
            <div className="accountFindButtonContainer">
                <p onClick={() => { dispatch(openFindEmail())}}>이메일 찾기</p>
                <p onClick={() => { dispatch(openFindPassword())}}>비밀번호 찾기</p>
            </div>
            <hr />
            <p className="subTitle">또는 다른 계정으로 로그인</p>
            <div className="subLoginButtonContainer">
                <img src="/resources/images/account/kakao.png" alt="카카오" />
                <img src="/resources/images/account/naver.png" alt="네이버" />
            </div>
            <p className="subTitle">아직 계정이 없다면 ?</p>
            <p className="linkToJoinBtn">Fantimate 계정으로 가입하기</p>
        </form>
    );
}

export default withRouter(Login);