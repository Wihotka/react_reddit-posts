import React from 'react';
import styles from './userblock.css';
import {EColor, Text} from "../../../Text";
import {AnonIcon} from "../../../Icons";

interface IUserBLockProps {
    avatarSrc?: string
    username?: string
    loading?: boolean
}

export function UserBlock({avatarSrc, username, loading}: IUserBLockProps) {
    return (
        <a className={styles.userBox}
           href={"https://www.reddit.com/api/v1/authorize?client_id=" + process.env.CLIENT_ID + "&response_type=token&state=RANDOM_STRING&redirect_uri=https://reddit-skillbox-react-app.herokuapp.com/&scope=read submit identity"}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
                    : <AnonIcon/>
                }
            </div>
            <div className={styles.username}>
                {
                    loading ?
                        (
                            <Text size={20} color={username ? EColor.black : EColor.gray99}>Загрузка...</Text>
                        ) : (
                            <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Anon'}</Text>
                        )
                }

            </div>
        </a>
    );
}
