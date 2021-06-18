import React from 'react';

import BackgroundBlur from '../Common/Background';
import '../../scss/agency/ChooseMenu.scss';
import { useDispatch } from 'react-redux';
import { OPEN_CHOOSEMENU } from '../../../_actions/openModules';
import { withRouter } from 'react-router-dom';


function ChooseMenu({ history, art }) {
    const dispatch = useDispatch();

    const onMoveMenu = () => {
        const menu = document.getElementById('selectMenu').value
        if (menu === 'official') {
            history.push({ pathname: '/artist/official' })
        } else if (menu === 'update') {
            history.push({ pathname: '/agency/create/artist', state: art })
        } else {
            alert('메뉴를 선택해주세요')
        }
    }
    return (
        <BackgroundBlur>
            <div className="chooseMenuContainer">
                <h2>CHOOSE MENU</h2>
                <select id="selectMenu">
                    <option value="">SELECT MENU</option>
                    <option value="official">오피셜등록</option>
                    <option value="update">아티스트수정</option>
                </select>
                <div className="chooseMenuButtonContainer">
                    <button onClick={onMoveMenu}>이동하기</button>
                    <button onClick={() => {dispatch({ type: OPEN_CHOOSEMENU })}}>취소하기</button>
                </div>
            </div>
        </BackgroundBlur>
    );
}

export default withRouter(ChooseMenu);