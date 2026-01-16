// ./02/components/H1.js

import React from 'react';

const HeaderClStyle = {
    margin: '1rem 0rem',
    border: '2px solid lightgray',
    backgroundColor: 'gray',
    padding: '1rem',
    borderRadius: '8px',
    color: 'lightgray',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: '1.25rem',
    fontWeight: '700',
    textTransform: 'uppercase'   
}

class HeaderCl extends React.Component {
    render() {
        return <header style={HeaderClStyle}>Moja pierwsza strona w React</header>
    }
}
export default HeaderCl;