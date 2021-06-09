import React from 'react';

function Artist({ artist }) {
    const { name } = artist;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default Artist;