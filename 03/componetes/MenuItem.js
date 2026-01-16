// ./02/components/H1.js

import React from 'react';

const MenuItemStyle = {
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
    textTransform: 'uppercase',
    listStyle: 'none'   
}

const LinkStyle = {
    minWidth: 'max-content',
    minHeight: 'max-content',
    color: 'lightgray',
    textDecoration: 'none'
};

class MenuItem extends React.Component {
    render(){
        const {text, url} = this.props
        return(
            <li style={MenuItemStyle}>
                <a href={url} style={LinkStyle}>
                    {text}
                    </a>
            </li>
        )
    }
}
export default MenuItem;