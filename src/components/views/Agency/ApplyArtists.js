import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';

import '../../scss/ApplyArtists.scss';
import { PhotoContianer } from '../Common/Components';


function ApplyArtists({ history }) {
    const onClick = () => {
        history.push({ pathname: '/artist/apply' })
    }

    return (
        <section className="registerArtistsContainer">
            <div className="headerContainer">
                <h2>YG엔터테인먼트 소속 아티스트</h2>
                <article>
                    <input type="text" placeholder="아티스트 검색" />
                    <div className="searchIcons">
                        <FiSearch />
                    </div>
                </article>
            </div>
            <div className="artistsContainer">
                <PhotoContianer name="AKMU" onClick={onClick}>
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </PhotoContianer>
                <PhotoContianer name="AKMU" onClick={onClick}>
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </PhotoContianer>
                <PhotoContianer name="AKMU" onClick={onClick}>
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </PhotoContianer>
                <PhotoContianer name="AKMU" onClick={onClick}>
                    <img src="/resources/images/main/artist1.svg" alt="아티스트"/>
                    <div>
                        <TiPlus />
                    </div>
                </PhotoContianer>
                <div className="createArtistContainer" onClick={onClick}>CREATE ARTIST</div>
            </div>
        </section>
    );
}

export default ApplyArtists;