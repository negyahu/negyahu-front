import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistById } from '../../../_reducers/artists';
import Loading from '../Common/Loading';
import ArtistCategory from './ArtistCategory';


function Artist({ match }) {
    const { data, loading, error } = useSelector(state => state.artists.artist);
    const dispatch = useDispatch();

    const { agencyId, artistId } = match.params;
    const agency = parseInt(agencyId, 10);
    const artist = parseInt(artistId, 10);

    useEffect(() => {
        dispatch(getArtistById(agency, artist))
    }, [agency, artist, dispatch]);

    if (loading) return <Loading />
    if (error) return alert('잠시 후 다시 접속해주세요')
    if (!data) return <div></div>

    return (
        <div className="artistContainer">
            <ArtistCategory artist={data}/>
        </div>
    );
}

export default Artist;