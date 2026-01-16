import React from 'react';
import { createRoot } from 'react-dom/client';
import MenuItem from './componetes/MenuItem.js';


const root = createRoot(document.querySelector('#root'));

const App = () => {
    return (
    <>
        <MenuItem text="Home Page" url="/home-page" />
        <MenuItem text="About us" url="/about-us" />
        <MenuItem text="Products" url="/products" />
    </>
    )
}


root.render(<App />)

