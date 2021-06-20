import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { getArtists, getSearchArtists } from '../../../_reducers/artists';
import { OPEN_CHOOSEMENU } from '../../../_actions/openModules';

import '../../scss/agency/ApplyArtists.scss';
import { PhotoContianer } from '../Common/Components';
import ChooseMenu from './ChooseMenu';
import Loading from '../Common/Loading';


function ApplyArtists({ history }) {
    const { data, loading, error } = useSelector(state => state.artists.artists)
    const openModule = useSelector(state => state.openModules.common);
    const dispatch = useDispatch();
    const [searchArtist, setSearchArtist] = useState('');
    const [art, setArt] = useState('')
    const artistContainer = useRef();
    const deleteButton = useRef(new Array());
    const agency = 'BIGHIT ENTERTAINMENT';

    useEffect(() => {
        dispatch(getArtists(agency))
    },[dispatch])

    if (loading || !data) return <Loading />
    if (error) return <div>에러발생!</div>

    const onApplyArtist = (e, i) => {
        /* eslint-disable-next-line */
        if (confirm('소속 아티스트를 등록하시겠습니까?')) {
            history.push({ pathname: '/agency/create/artist', state: { agency: agency } })
        }
    }

    const onClickArtist = (e, art, i) => {
        if (!deleteButton.current[i].contains(e.target)) {
            setArt(art)
            dispatch({ type: OPEN_CHOOSEMENU })
        }
    }

    const onDeleteArtist = (e, art, i) => {
        if (deleteButton.current[i].contains(e.target)) {
            /* eslint-disable-next-line */
            if (confirm(`${art.name} 아티스트를 삭제하시겠습니까? 삭제시 관련 모든 정보가 삭제됩니다`)) {
                alert('삭제되었다고 치자')
            }
        }
    }

    // 엔터키 입력시 아티스트 검색
    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onSearchArtist()
        }
    }
    // 아티스트 검색
    const onSearchArtist = () => {
        dispatch(getSearchArtists(agency, searchArtist.toUpperCase()))
        setSearchArtist('')
    }

    return (
        <>
        {
            openModule.chooseMenu && <ChooseMenu art={art}/>
        }
        <section className="registerArtistsContainer">
            <div className="headerContainer">
                <h2>{agency}</h2>
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
                <button onClick={onApplyArtist}>CREATE</button>
                {
                    data.length > 1 
                    ?
                    data.map((artist, i) => {
                        return (
                            <PhotoContianer 
                                name={artist.name}
                                onClick={(e) => {onClickArtist(e, artist, i)}} key={artist.imageId}
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
                    : 
                    <PhotoContianer 
                        name={data[0].name}
                        onClick={() => {onClickArtist(data[0])}} key={data[0].imageId}
                    >
                        <img src={data[0].imageURL} alt="아티스트"/>
                        <div>
                            <TiPlus />
                        </div>
                    </PhotoContianer>
                }
            </div>
        </section>
        </>
    );
}

export default ApplyArtists;