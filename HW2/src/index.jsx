import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';

window.addEventListener('load', () => {
    ReactDOM.render(<Header />, document.getElementById('react-root'));
});
