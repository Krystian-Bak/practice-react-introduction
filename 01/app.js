import React from 'react';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

root.render(React.createElement('h1', null, 'React działa!'));