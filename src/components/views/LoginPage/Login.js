import React, { useReducer, useState } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

import { tempAccount } from '../../../utils/temp';
import { BackgroundColor } from '../NavBar/Header';

import './Login.scss';

const findAccount = {
    findUserEmail: false,
    findUserPwd: false,
}

function findAccountReducer(state, action) {
    switch (action.type) {
        case 'OPENFINDEMAIL': return state = action.open;
        case 'OPENFINDPWD': return state = action.open;
        default: throw new Error(`Unhandled action type: ${ action.type }`);
    }
}

function Login(props) {
    const [state, dispatch] = useReducer(findAccountReducer, findAccount);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onClickHandler = () => {
        onSubmitHandler()
    }
    const onSubmitHandler = (e) => {
        let userInfo = {
            email: email,
            password: password
        }

        axios.post('/api/login', userInfo)
        .then(response => {
            alert(response.data + "님 환영합니다") 
            props.history.push({ pathname: '/' })
        })
        .catch(err => {
            alert(err) 
        })
    }

    return (
        <>
        {
            state.findUserEmail && <FindUserEmail state={ state } dispatch={ dispatch } />
        }
        {
            state.findUserPwd && <FindUserPassword state={ state } dispatch={ dispatch } />
        }
        <form className="loginFormContainer" onSubmit={ onSubmitHandler }>
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
                <button className="loginBtn" type="button" onClick={ onClickHandler }>로그인</button>
            </div>
            <div className="accountFindButtonContainer">
                <p onClick={() => {
                    dispatch({ type: 'OPENFINDEMAIL', open: { ...findAccount, findUserEmail: !state.findUserEmail } }) 
                }}>이메일 찾기</p>
                <p onClick={() => {
                    dispatch({ type: 'OPENFINDPWD', open: { ...findAccount, findUserPwd: !state.findUserPwd } }) 
                }}>비밀번호 찾기</p>
            </div>
            <hr />
            <p className="subTitle">또는 다른 계정으로 로그인</p>
            <div className="subLoginButtonContainer">
                <img src="/resources/images/account/kakao.png" alt="카카오" />
                <img src="/resources/images/account/naver.png" alt="네이버" />
            </div>
            <p className="subTitle">아직 계정이 없다면 ?</p>
            <p className="linkToJoinBtn" onClick={() => {
                props.history.push({ pathname: "/join" });
            }}>Fantimate 계정으로 가입하기</p>
        </form>
        </>
    );
}

const information = {
    name: '',
    email: '',
    phone: '',
}

function FindUserEmail({ state, dispatch, ...rest }) {
    
    const [open, setOpen] = useState(false);

    const searchEmail = (info) => {
        
        if (information.name === '') return alert("이름을 입력하세요");
        else if (information.phone === '') return alert("연락처를 입력하세요");

        const account = tempAccount.find((account) => {
            return account.name === info.name && account.phone === info.phone
        })

        if (account) {
            return (
                <FoundAccount 
                    type="ID" 
                    name={ account.name } 
                    email={ account.email }
                    setOpen={ setOpen }
                />
            )
        } else {
            return <FoundAccount type="NONE_NAME" setOpen={ setOpen } />
        }

    }

    return (
        <BackgroundColor>
            {
                open && searchEmail(information)
            }
            <section className="findAccountContainer">
                <header>
                    <p>Fantimate Account</p>
                    <p>이메일 찾기</p>
                </header>
                <div className="findAccountInputContainer">
                    <input 
                        type="text"
                        placeholder="이름 입력"
                        onChange={(e) => { information.name = e.target.value }}
                    />
                    <input 
                        type="tel"
                        placeholder="연락처 입력 (-) 포함"
                        onChange={(e) => { information.phone = e.target.value }}
                    />
                </div>
                <div className="findAccountButtonContainer">
                    <button onClick={ () => { setOpen(true) }}>이메일 찾기</button>
                    <button onClick={() => {
                        dispatch({ type: 'OPENFINDEMAIL', open: { ...findAccount, findUserEmail: !state.findUserEmail } })
                    }}>뒤로가기</button>
                </div>
            </section>
        </BackgroundColor>
    )
}

function FindUserPassword({ state, dispatch, ...rest }) {
    
    const [open, setOpen] = useState(false);

    const searchPwd = (info) => {

        if (information.email === '') return alert("이메일을 입력하세요");
        else if (information.name === '') return alert("이름을 입력하세요");

        const account = tempAccount.find((account) => {
            return account.email === info.email && account.name === info.name
        })

        if (account) {
            return <FoundAccount type="PWD" setOpen={ setOpen } />
        } else {
            return <FoundAccount setOpen={ setOpen } />
        }

    }

    return (
        <BackgroundColor>
            {
                open && searchPwd(information)
            }
            <section className="findAccountContainer">
                <header>
                    <p>Fantimate Account</p>
                    <p>비밀번호 찾기</p>
                </header>
                <div className="findAccountInputContainer">
                    <input 
                        type="email" 
                        placeholder="이메일 입력"
                        onChange={(e) => { information.email = e.target.value }}
                    />
                    <input 
                        type="text"
                        placeholder="이름 입력"
                        onChange={(e) => { information.name = e.target.value }}
                    />
                </div>
                <div className="findAccountButtonContainer">
                    <button onClick={() => { setOpen(true) }}>비밀번호 찾기</button>
                    <button onClick={() => {
                        dispatch({ type: 'OPENFINDPWD', open: { ...findAccount, findUserPwd: !state.findUserPwd } })
                    }}>뒤로가기</button>
                </div>
            </section>
        </BackgroundColor>
    )
}

function FoundAccount({ type, name, email, setOpen }) {
    return (
        <article className="fountAccountContainer">
            {
                type === 'ID'
                ? <div>{ name } 님의 이메일은<span>{ email }</span>입니다</div>
                : type === 'NONE_NAME'
                  ? <div>존재하는 이름 또는 연락처가 없습니다</div>
                  : type === 'PWD'
                    ? <div>회원님 이메일로 비밀번호를 발송하였습니다</div>
                    : <div>존재하는 회원이 없습니다</div>
            }
            <button onClick={() => { setOpen(false) }}>닫기</button>
        </article>
    )
}

export default withRouter(Login);