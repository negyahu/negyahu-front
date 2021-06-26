import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getArtists } from '../../../_reducers/artists';
import '../../scss/ArtistList.scss';
import Loading from '../Common/Loading';

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
        object-position: top;
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

function ArtistList({ history }) {
    const { data, loading, error } = useSelector(state => state.artists.artists);
    const user = useSelector(state => state.keepInformation.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArtists());
    }, [dispatch])

    if (loading) return <Loading />
    if (error) return alert('잠시 후 다시 접속해주세요')
    if (!data) return <div></div>

    const onMoveFeedPage = (agencyId, artistId) => {
        if (user) {
            if (user.auth === 'USER' || user.auth === 'ARTIST') {
                let isSubscribe = 'N'   // 유저 구독 정보 임의로 기재
                isSubscribe === 'Y'
                ? history.push(`/feed/agency/${agencyId}/artist/${artistId}`)
                : history.push(`/subscribe/agency/${agencyId}/artist/${artistId}`)
            } else {
                return alert('유저 및 아티스트만 이용가능합니다')
            }
        } else {
            alert('로그인을 해주세요')
            return history.push('/login')
        }
    }
    
    return (
        <section className="mainContainer">
            <div className="artistsContainer">
                {
                    data.map(agency => 
                        agency.artists.map(artist => {
                            return (
                                <ArtistImage
                                    name={artist.nameEN}
                                    key={artist.id}
                                    onClick={() => {onMoveFeedPage(agency.id, artist.id)}}
                                >
                                    <img src={`${artist.imageURL}`} alt="연예인"/>
                                </ArtistImage>
                            )
                        })
                    )
                }
            </div>
        </section>
    );
}

export default withRouter(ArtistList);