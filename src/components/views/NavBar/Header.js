import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
    const userData = useSelector(state => state.keepInformation.user)
    const openModule = useSelector(state => state.openModules.header)

    const onMoveMainPage = () => {
        if (userData) {
            switch (userData.auth) {
                case 'USER':
                    return history.push({ pathname: "/" })
                case 'AGENCY':
                    return history.push({ pathname: "/agency" })
                case 'ADMIN':
                    return history.push({ pathname: "/admin" })
                default:
                    return history.push({ pathname: "/" })
            }
        } else {
            history.push({ pathname: "/" })
        }
    }

    return (
        <NavbarContainer>
            {
                openModule.getMail && <Mail />
            }
            {
                openModule.mailForm && <MailForm />
            }
            <Navbar>
                <p className="logo" onClick={onMoveMainPage}>FANTIMATE</p>
                <div className="menuContainer">
                    {
                        userData
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