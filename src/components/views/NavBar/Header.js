import React, { useReducer } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import '../../scss/Header.scss';

import MailForm from '../Common/MailForm';
import NoneLoginMenuIcons from './NoneLoginMenuIcons';
import LoginMenuIcons from './LoginMenuIcons';
import Notifications from './Notifications';
import Mails from './Mails';
import Mail from '../Common/Mail';
import MoreMenus from './MoreMenus';

const NavbarContainer = styled.header`
    width: 100%;
    height: auto;
    box-sizing: border-box;
`;

const Navbar = styled.nav`
    width: 100%;
    height: 90px;
    background: #fbf6f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;
    box-sizing: border-box;
    box-shadow: 0 2px 2px rgba(150, 150, 150, 0.3);
`;

export const initialOpenState = {
    notification: false,
    mail: false,
    more: false,
    getMail: false,
    sendMail: false,
    mailForm: false,
}

function openReducer(state, action) {
    switch (action.type) {
        case 'NOTIFICATION': return state = action.open;
        case 'MAIL': return state = action.open;
        case 'MORE': return state = action.open;
        case 'GETMAIL': return state = action.open;
        case 'SENDMAIL': return state = action.open;
        case 'MAILFORM': return state = action.open;
        default: throw new Error(`Unhandled action type: ${ action.type }`)
    }
}



function Header({ data, history }) {
    const [state, dispatch] = useReducer(openReducer, initialOpenState);
    return (
        <NavbarContainer>
            {
                state.getMail && <Mail state={ state } dispatch={ dispatch } />
            }
            {
                state.mailForm && <MailForm state={ state } dispatch={ dispatch } />
            }
            <Navbar>
                <p className="logo" onClick={() => {
                    history.push({ pathname: "/" })
                }}>FANTIMATE</p>
                <div className="menuContainer">
                    {
                        data 
                        ? <LoginMenuIcons state={ state } dispatch={ dispatch }/>
                        : <NoneLoginMenuIcons />
                    }
                </div>
            </Navbar>
            {
                state.notification && <Notifications />
            }
            {
                state.mail && <Mails state={ state } dispatch={ dispatch } />
            }
            {
                state.more && <MoreMenus />
            }
        </NavbarContainer>
    );
}


export default withRouter(Header);