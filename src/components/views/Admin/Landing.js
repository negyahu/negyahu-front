import React from 'react';
import { Route } from 'react-router-dom';
import AgencyList from './AgencyList';
import { RiMenuUnfoldFill, RiMenuFoldFill } from 'react-icons/ri';

import '../../scss/admin/Landing.scss';
import { IconContainer } from '../Common/Components';
import { useState } from 'react';
import styled, {css} from 'styled-components';

const OpenMenu = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: auto;
    opacity: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Yoon Minguk;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    box-sizing: border-box;
    transition: all 0.4s;
    ${props => props.open && css`
        opacity: 1;
        ${List} {
            font-size: 17px;
            padding: 0 20px;
        }
    `}
`;

const List = styled.li`
    flex-grow: 1;
    flex-basis: auto;
    font-size: 0;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.3s;
    &:hover {
        color: #ff6b6b;
    }
    &:active {
        color: #f03e3e;
    }
    ${props => props.path && css`
        color: #ff6b6b;
    `}
`;

function Landing({ history, match }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="adminContainer">
            <h2>
                {
                    history.location.pathname === '/admin'
                    ? `HOME`
                    : history.location.pathname === '/admin/agency'
                    ? `AGENCY LIST`
                    : history.location.pathname === '/admin/users'
                    ? `PAYMENT`
                    : ''
                }
                <IconContainer
                    size="40px"
                    color="#5C5F78"
                    hover="color"
                    active
                    style={{ margin: '0px 20px'}}
                    onClick={() => {setOpen(!open)}}
                >
                    {
                        open ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />
                    }
                </IconContainer>
                <OpenMenu open={open}>
                    <List
                        path={history.location.pathname === '/admin'}
                        onClick={() => {
                            history.push('/admin');
                            setOpen(!open);
                        }}
                    >HOME</List>
                    <List
                        path={history.location.pathname === '/admin/agency'}
                        onClick={() => {
                            history.push('/admin/agency');
                            setOpen(!open);
                        }}
                    >AGENCY LIST</List>
                    <List
                        path={history.location.pathname === '/admin/users'}
                        onClick={() => {
                            history.push('/admin/users');
                            setOpen(!open);
                        }}
                    >PAYMENT</List>
                </OpenMenu>
            </h2>
            <Route path="/admin/agency" component={AgencyList}/>
        </div>
    );
}

export default Landing;