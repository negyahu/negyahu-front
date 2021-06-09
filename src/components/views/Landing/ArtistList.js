import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../scss/ArtistList.scss';

const ArtistImage = styled.div`
    width: 350px;
    height: 270px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    }
`;

function ArtistList({ artists }) {
    return (
        <section className="mainContainer">
            <div className="artistsContainer">
                {
                    artists.map(artist => 
                        <Link to={`/artist/${artist.imageId}`} key={artist.imageId}>
                            <ArtistImage name={artist.name}>
                                <img src={`${artist.imageURL}`} alt="연예인"/>
                            </ArtistImage>
                        </Link>
                    )
                }
            </div>
        </section>
    );
}

export default ArtistList;