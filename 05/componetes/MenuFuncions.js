import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem.js'

const MenuFuncions = ({itemsMenu}) => ( 
    <ul>
        {itemsMenu.map((item, index) => ( 
            <MenuItem key={index} text={item.text} url={item.url} />
        ))}
    </ul>
)

MenuFuncions.propTypes = {
    itemsMenu: PropTypes.arrayOf( // props = arr
        PropTypes.shape({ // all in arr = object
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
}

export default MenuFuncions