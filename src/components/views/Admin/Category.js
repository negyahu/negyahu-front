import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../scss/admin/Category.scss';
import { CategoryButton } from '../Common/Components';

function Category({ history }) {
    return (
        <section className="categoryContainer">
            <CategoryButton 
                path={history.location.pathname === '/admin'}
                onClick={() => {history.push('/admin')}}
            >홈</CategoryButton>
            <CategoryButton
                path={history.location.pathname === '/admin/agency'}
                onClick={() => {history.push('/admin/agency')}}
            >소속사 신청 정보</CategoryButton>
            <CategoryButton
                path={history.location.pathname === '/admin/users'}
                onClick={() => {history.push('/admin/users')}}
            >회원 정보</CategoryButton>
        </section>
    );
}

export default withRouter(Category);