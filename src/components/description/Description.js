import React from 'react';

function Description({info}) {
    return (
        <div>
            <h2>{info.title}</h2>
            <h2>{info.description}</h2>
        </div>
    );
}

export default Description;