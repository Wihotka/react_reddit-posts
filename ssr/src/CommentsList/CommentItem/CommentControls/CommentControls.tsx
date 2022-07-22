import React from 'react';
import styles from './commentcontrols.css';
import {CommentIcon, ReportIcon, ShareIcon} from "../../../Icons";
import {CommentUserType} from "../CommentUser";

interface ICommentControls {
    user: CommentUserType,
    handleReply: (userName: string) => void
}

export function CommentControls({user, handleReply}: ICommentControls) {
    return (
        <div className={styles.controls}>
            <button onClick={() => {
                handleReply(user.name)
            }}>
                <CommentIcon/>
                <div className={styles.buttonText}>Ответить</div>
            </button>
            <button>
                <ShareIcon/>
                <div className={styles.buttonText}>Поделиться</div>
            </button>
            <button>
                <ReportIcon/>
                <div className={styles.buttonText}>Пожаловаться</div>
            </button>
        </div>
    );
}
