import React from 'react';
import PropTypes from 'prop-types';
import MenuFuncions from './MenuFuncions.js'

const NavFuncions = ({itemsMenu}) => (
    <nav>
        <MenuFuncions itemsMenu={itemsMenu} />
    </nav>
)

NavFuncions.propTypes = {
    itemsMenu: MenuFuncions.propTypes.itemsMenu
}

export default NavFuncions