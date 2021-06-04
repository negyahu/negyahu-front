import React from 'react';
import { withRouter } from 'react-router';
import './Main.scss';

function Main() {
    return (
        <section className="mainContainer">
            <div className="artistsContainer">
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
            </div>
        </section>
    );
}


function Artist() {
    return (
        <div className="artistContainer">

        </div>
    )
}

export default withRouter(Main);