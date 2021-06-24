import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAgency } from '../../../api/artists';
import { getCookieValue } from '../../../utils/cookies';
import Loading from '../Common/Loading';

function AgencyLanding({ history }) {
    const { data, loading, error } = useSelector(state => state.artists.agency)
    const dispatch = useDispatch();

    useEffect(() => {
        const token = getCookieValue("user");
        console.log(token)
        dispatch(getAgency(token))
        if (data) {
            history.push({ pathname: `/agencies/${data.id}/artists`})
        }
    }, [dispatch, data, history])

    if (loading || !data) return <Loading />
    if (error) return <div>에러</div>

    return (
        <div>
            
        </div>
    );
}

export default AgencyLanding;