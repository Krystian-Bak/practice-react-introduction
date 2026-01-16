import React from 'react';
import PropTypes from 'prop-types';

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
    color: 'lightgray',
    textDecoration: 'none'
}

const MenuItem = ({ text, url }) => (
    <li style={MenuItemStyle}>
        <a href={url} style={LinkStyle}>
            {text}
        </a>
    </li>
)

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default MenuItem 