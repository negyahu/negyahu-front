import React from 'react';
import ArtistContainer from '../containers/ArtistContainer';

function ArtistPage({ match }) {
    const { id } = match.params;
    const imageId = parseInt(id, 10);

    return <ArtistContainer imageId={imageId} />
}

export default ArtistPage;