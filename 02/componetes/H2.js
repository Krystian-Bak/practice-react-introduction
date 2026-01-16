// ./02/components/H2.js

import React from 'react';

const HeaderStyle = {
    margin: '1rem 0rem',
    border: '2px solid gray',
    backgroundColor: 'lightgray',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: '1.25rem',
    fontWeight: '700',
    textTransform: 'uppercase'   
}

const HeaderFn = () => {
    return (
        <header style={HeaderStyle}>
            Moja pierwsza strona w React
        </header>
    )
}

export default HeaderFn;