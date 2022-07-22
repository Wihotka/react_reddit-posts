import React from 'react';
import styles from './commentuser.css';

export type CommentUserType = {
  name: string,
  lastLogin: string,
  groupName: string,
  avatar: string
}

interface ICommentUser {
  user: CommentUserType,
}

export function CommentUser({user}: ICommentUser) {
  return (
      <div className={styles.userBlock}>
        <div className={styles.avatarBlock}>
          <img src={user.avatar} className={styles.avatarImage}/>
        </div>
        <div className={styles.userName}>{user.name}</div>
        <div className={styles.lastLogin}>{user.lastLogin}</div>
        <div className={styles.groupName}>{user.groupName}</div>
      </div>
  );
}
