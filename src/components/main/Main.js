import React from 'react';
import { withRouter } from 'react-router';

function Main() {
    return (
        <section className="main-section">
            <Artists />
        </section>
    );
}

function Artists() {
    return (
        <div className="main-artists"></div>
    )
}

export default withRouter(Main);