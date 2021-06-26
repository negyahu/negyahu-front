import React, { useRef } from 'react';

import BackgroundBlur from '../Common/Background';
import '../../scss/agency/ChooseMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_CHOOSEMENU } from '../../../_actions/openModules';
import { withRouter } from 'react-router-dom';


function ChooseMenu({ history, match }) {
    const { data } = useSelector(state => state.openModules.common.chooseMenu)
    const dispatch = useDispatch();
    const agencyId = parseInt(match.params.agencyId, 10)

    const onMoveMenu = () => {
        const selectMenu = document.getElementById('selectMenu')
        if (selectMenu.value === 'official') {
            history.push({ pathname: `/agency/official` })
        } else if (selectMenu.value === 'update') {
            history.push({ pathname: `/agency/${agencyId}/artist/${data.id}`, state: {data: data} })
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
                    <button onClick={() => {dispatch({ type: OPEN_CHOOSEMENU, data: null })}}>취소하기</button>
                </div>
            </div>
        </BackgroundBlur>
    );
}

export default withRouter(ChooseMenu);