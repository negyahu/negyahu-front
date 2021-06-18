import React, { useState } from 'react';
import { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistsByAgency } from '../../../modules/artists';
import { OPEN_CHOOSEMENU } from '../../../_actions/openModules';

import '../../scss/ApplyArtists.scss';
import { PhotoContianer } from '../Common/Components';
import ChooseMenu from './ChooseMenu';
import Loading from '../Common/Loading';


function ApplyArtists({ history }) {
    const { data, loading, error } = useSelector(state => state.artists.artistsByAgency)
    const openModule = useSelector(state => state.openModules.common);
    const dispatch = useDispatch();

    const [art, setArt] = useState('')
    const agency = 'BIGHIT ENTERTAINMENT';

    useEffect(() => {
        dispatch(getArtistsByAgency(agency))
    },[dispatch])

    if (loading || !data) return <Loading />
    if (error) return <div>에러발생!</div>

    const onApplyArtist = () => {
        /* eslint-disable-next-line */
        if (confirm('소속사를 등록하시겠습니까?')) {
            history.push({ pathname: '/agency/create/artist', state: { agency: agency } })
        }
    }

    const onClickArtist = art => {
        setArt(art)
        dispatch({ type: OPEN_CHOOSEMENU })
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
                    <input type="text" placeholder="아티스트 검색" />
                    <div className="searchIcons">
                        <FiSearch />
                    </div>
                </article>
            </div>
            <div className="artistsContainer">
                <button onClick={onApplyArtist}>CREATE</button>
                {
                    data.length > 1 
                    ?
                    data.map(artist => {
                        return (
                            <PhotoContianer 
                                name={artist.name}
                                onClick={() => {onClickArtist(artist)}} key={artist.imageId}
                            >
                                <img src={artist.imageURL} alt="아티스트"/>
                                <div>
                                    <TiPlus />
                                </div>
                            </PhotoContianer>
                        )
                    })
                    : 
                    <PhotoContianer 
                        name={data.name}
                        onClick={() => {onClickArtist(data)}} key={data.imageId}
                    >
                        <img src={data.imageURL} alt="아티스트"/>
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