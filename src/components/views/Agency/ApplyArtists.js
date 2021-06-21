import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';
import { FcManager } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { getAgencyById, getArtists, getArtistsBySearchData } from '../../../_reducers/artists';
import { OPEN_CHOOSEMENU, OPEN_MANAGERS } from '../../../_actions/openModules';

import '../../scss/agency/ApplyArtists.scss';
import { IconContainer, PhotoContianer } from '../Common/Components';
import ChooseMenu from './ChooseMenu';
import CreateManagers from './CreateManagers';
import Loading from '../Common/Loading';


function ApplyArtists({ history, match }) {
    const agency = useSelector(state => state.artists.agency.data)
    const { data, loading, error } = useSelector(state => state.artists.artists)
    const openModule = useSelector(state => state.openModules);
    const dispatch = useDispatch();

    const agencyId = parseInt(match.params.agencyId, 10);

    const [searchArtist, setSearchArtist] = useState('');
    const artistContainer = useRef();
    const deleteButton = useRef(new Array());
    
    useEffect(() => {
        dispatch(getAgencyById(agencyId))
        dispatch(getArtists(agencyId))
    },[dispatch, agencyId])

    if (loading || !data) return <Loading />
    if (error) return <div>에러발생!</div>

    const onCreateArtist = (e, i) => {
        /* eslint-disable-next-line */
        if (confirm('소속 아티스트를 등록하시겠습니까?')) {
            history.push({ pathname: `/agency/${agencyId}/artist/`, state: { agency: agencyId } })
        }
    }

    const onModifyArtist = (e, artist, i) => {
        if (!deleteButton.current[i].contains(e.target)) {
            dispatch({ type: OPEN_CHOOSEMENU, data: artist })
        }
    }

    const onDeleteArtist = (e, artist, i) => {
        if (deleteButton.current[i].contains(e.target)) {
            /* eslint-disable-next-line */
            if (confirm(`${artist.nameEN} 아티스트를 삭제하시겠습니까? 삭제시 관련 모든 정보가 삭제됩니다`)) {
                alert('삭제되었다고 치자')
            }
        }
    }

    // 엔터키 입력시 아티스트 검색
    const onKeyPress = (e) => {
        if (searchArtist === '') {
            return alert('검색할 아티스트를 입력하세요')
        } 
        if (e.key === 'Enter') {
            onSearchArtist()
        }
    }
    // 아티스트 검색
    const onSearchArtist = () => {
        if (searchArtist === '') {
            return alert('검색할 아티스트를 입력하세요')
        } 
        dispatch(getArtistsBySearchData(agencyId, searchArtist.toUpperCase()))
        setSearchArtist('')
    }

    const onGetManagers = () => {
        dispatch({ type: OPEN_MANAGERS, data: data })
    }

    return (
        <>
        {
            openModule.common.chooseMenu.open && <ChooseMenu />
        }
        {
            openModule.create.managers.open && <CreateManagers />
        }
        <section className="registerArtistsContainer">
            <div className="headerContainer">
                <h2>
                    {agency.agencyName}
                    <IconContainer 
                        size="50px" 
                        onClick={onGetManagers}
                    >
                        <FcManager />
                    </IconContainer>
                </h2>
                <article>
                    <input
                        type="text"
                        value={searchArtist}
                        placeholder="아티스트 검색"
                        onChange={(e) => {setSearchArtist(e.currentTarget.value)}}
                        onKeyPress={onKeyPress}
                    />
                    <div className="searchIcons">
                        <FiSearch onClick={onSearchArtist}/>
                    </div>
                </article>
            </div>
            <div className="artistsContainer">
                <button onClick={onCreateArtist}>CREATE</button>
                {
                    data
                    ?
                    data.map((artist, i) => {
                        return (
                            <PhotoContianer 
                                name={artist.nameEN}
                                onClick={(e) => {onModifyArtist(e, artist, i)}} key={artist.imageId}
                                ref={artistContainer}
                            >
                                <img src={artist.imageURL} alt="아티스트"/>
                                <div 
                                    ref={(e) => {deleteButton.current[i] = e}}
                                    onClick={(e) => {onDeleteArtist(e, artist, i)}}
                                >
                                    <TiPlus />
                                </div>
                            </PhotoContianer>
                        )
                    })
                    : <div>데이터가 없습니다</div>
                }
            </div>
        </section>
        </>
    );
}

export default ApplyArtists;