import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

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


function Header({ history }) {
    const { data } = useSelector(state => state.sign.login)
    const openModule = useSelector(state => state.openModules.header)

    return (
        <NavbarContainer>
            {
                openModule.getMail && <Mail />
            }
            {
                openModule.mailForm && <MailForm />
            }
            <Navbar>
                <p className="logo" onClick={() => {
                    history.push({ pathname: "/" })
                }}>FANTIMATE</p>
                <div className="menuContainer">
                    {
                        data 
                        ? <LoginMenuIcons />
                        : <NoneLoginMenuIcons />
                    }
                </div>
            </Navbar>
            {
                openModule.notification && <Notifications />
            }
            {
                openModule.mail && <Mails />
            }
            {
                openModule.more && <MoreMenus />
            }
        </NavbarContainer>
    );
}


export default withRouter(Header);