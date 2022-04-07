import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './App';

window.addEventListener('load', () => {
    ReactDOM.render(<AppComponent />, document.getElementById('react-root'));
});
