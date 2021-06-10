import React from 'react';

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

export default FoundAccount;