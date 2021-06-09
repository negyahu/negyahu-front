import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/views/Common/Loading';
import ArtistList from '../components/views/Landing/ArtistList';
import { getArtists } from '../modules/artists';

function ArtistListContainer() {
    const { data, loading, error } = useSelector(state => state.artists.artists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArtists());
    }, [dispatch])

    if (loading) return <Loading />
    if (error) return alert('잠시 후 다시 접속해주세요')
    if (!data) return <div></div>

    return <ArtistList artists={data} />
}

export default ArtistListContainer;