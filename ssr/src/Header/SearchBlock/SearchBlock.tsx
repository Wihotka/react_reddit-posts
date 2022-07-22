import React from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import {useUserData} from "../../hooks/useUserData";


export function SearchBlock() {
    const {data, loading} = useUserData();

    return (
        <div className={styles.searchBlock}>
            <div className={styles.inputBox}>
                <input className={styles.inputField} type="text" placeholder="Поиск..."/>
            </div>
            <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
        </div>
    );
}
