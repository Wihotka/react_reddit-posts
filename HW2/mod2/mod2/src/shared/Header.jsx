import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './header.css';

function HeaderComponent() {
    return (
        <header className={styles.example}>
            <h1>Hello, React!</h1>
        </header>
    )
}

export const Header = hot(HeaderComponent);