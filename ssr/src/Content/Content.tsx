import React from 'react';
import styles from './content.css';
import {useToken} from "../hooks/useToken";

interface IContentProps {
    children?: React.ReactNode;
}

export function Content({children}: IContentProps) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
}
