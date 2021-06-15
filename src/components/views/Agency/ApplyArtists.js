import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';
import styled from 'styled-components';

import '../../scss/ApplyArtists.scss';

const PhotoContianer = styled.div`
    width: 350px;
    height: 350px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    div {
        font-size: 60px;
        color: black;
        position: absolute;
        right: -25px;
        top: -30px;
        transform: rotate(45deg);
        opacity: 0;
    }
    &::before {
        content: '${props => props.name}';
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        width: 0;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(92, 95, 120, 0.6);
        color: white;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        z-index: 1;

        transition: all 0.3s linear;
    }
    &:hover {
        &::before {
            width: 100%;
            opacity: 1;
        }
        div {
            opacity: 1;
            z-index: 3;
        }
    }

`;


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