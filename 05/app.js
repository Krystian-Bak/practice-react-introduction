import React from 'react'
import { createRoot } from 'react-dom/client'
import NavFuncions from './componetes/NavFuncions.js'

const root = createRoot(document.querySelector('#root'));

const AppMenuFunction = () => {
    const itemsMenu = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        {  url: '/products' }
    ]
    return <NavFuncions itemsMenu={itemsMenu} />
}

root.render(
<>
<div>Menu</div>
<AppMenuFunction />
</>
)