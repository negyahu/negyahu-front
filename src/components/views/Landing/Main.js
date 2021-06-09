import React from 'react';
import { withRouter } from 'react-router';
import ArtistListContainer from '../../../containers/ArtistListContainer';
import '../../scss/Main.scss';

function Main() {
    return <ArtistListContainer />
}


export default withRouter(Main);