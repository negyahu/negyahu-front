import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/views/Common/Loading';
import Artist from '../components/views/Landing/Artist';
import { getArtist } from '../modules/artists';

function ArtistContainer({ imageId }) {
    const { data, loading, error } = useSelector(state => state.artists.artist);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArtist(imageId))
    }, [imageId, dispatch]);

    if (loading) return <Loading />
    if (error) return alert('잠시 후 다시 접속해주세요')
    // if (!data) return alert('데이터를 받아오지 못했습니다')

    return <Artist artist={data}/>
}

export default ArtistContainer;