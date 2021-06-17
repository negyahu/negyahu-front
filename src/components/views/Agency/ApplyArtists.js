import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_CHOOSEMENU } from '../../../_actions/openModules';

import '../../scss/ApplyArtists.scss';
import { PhotoContianer } from '../Common/Components';
import ChooseMenu from './ChooseMenu';


function ApplyArtists({ history }) {
    const openModule = useSelector(state => state.openModules.common);
    const dispatch = useDispatch();

    const onApplyArtist = () => {
        /* eslint-disable-next-line */
        if (confirm('소속사를 등록하시겠습니까?')) {
            history.push({ pathname: '/agency/create/artist' })
        }
    }

    return (
        <>
        {
            openModule.chooseMenu && <ChooseMenu />
        }
        <section className="registerArtistsContainer">
            <h2>YG엔터테인먼트 소속 아티스트</h2>
            <div className="headerContainer">
                <button onClick={onApplyArtist}>CREATE</button>
                <article>
                    <input type="text" placeholder="아티스트 검색" />
                    <div className="searchIcons">
                        <FiSearch />
                    </div>
                </article>
            </div>
            <div className="artistsContainer">
                <PhotoContianer name="AKMU" onClick={() => {dispatch({ type: OPEN_CHOOSEMENU })}}>
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </PhotoContianer>
            </div>
        </section>
        </>
    );
}

export default ApplyArtists;