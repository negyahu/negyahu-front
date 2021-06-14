import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtist } from '../../../modules/artists';
import Loading from '../Common/Loading';


function Artist({ match }) {
    const { data, loading, error } = useSelector(state => state.artists.artist);
    const dispatch = useDispatch();

    const { id } = match.params;
    const imageId = parseInt(id, 10);

    useEffect(() => {
        dispatch(getArtist(imageId))
    }, [imageId, dispatch]);

    if (loading) return <Loading />
    if (error) return alert('잠시 후 다시 접속해주세요')
    if (!data) return <div></div>

    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
}

export default Artist;