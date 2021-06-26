import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getCookieValue } from '../../../utils/cookies';
import { getAgency } from '../../../_reducers/artists';
import Loading from '../Common/Loading';
import ApplyArtists from './ApplyArtists';

function AgencyLanding({ history }) {
    const { data, loading, error } = useSelector(state => state.artists.agency)
    const dispatch = useDispatch();

    useEffect(() => {
        const token = getCookieValue("user");
        dispatch(getAgency(token))
    }, [dispatch])

    if (loading || !data) return <Loading />
    if (error) return <div>에러</div>

    return (
        <>
            <ApplyArtists />
        </>
    );
}

export default AgencyLanding;