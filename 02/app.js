import React from 'react';
import { createRoot } from 'react-dom/client';
import HeaderCl from './componetes/H1';
import HeaderFn from './componetes/H2';



const root = createRoot(document.querySelector('#root'));

const App = () => {
    return (<>
        <HeaderFn />
        <HeaderCl />
    </>
    )
}


root.render(<App />)

