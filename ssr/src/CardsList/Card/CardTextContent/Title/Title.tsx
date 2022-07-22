import React from 'react';
import styles from './title.css';
import {preventDefault} from "../../../../utils/react/preventDefault";
import {Link} from 'react-router-dom';

interface ITitleProps {
    postUrl: string,
    postDescription: string
}

export function Title(props: ITitleProps) {
    const {postUrl, postDescription} = props;

    return (
        <h2>
            <Link to={'/posts/' + postUrl} className={styles.postLink}>
                {postDescription}
            </Link>
        </h2>
    );
}
