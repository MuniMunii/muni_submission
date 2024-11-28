import React from 'react';
import { createRoot } from 'react-dom/client';
import PageNote from './page';
// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<PageNote/>);