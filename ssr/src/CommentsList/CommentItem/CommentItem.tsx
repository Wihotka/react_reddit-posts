import React from 'react';
import styles from './commentitem.css';
import {CommentRate} from "./CommentRate";
import {CommentUser, CommentUserType} from "./CommentUser";
import {CommentControls} from "./CommentControls";

export interface ICommentItemProps {
    children?: React.ReactNode,
    comment: CommentType,
    handleReply: (userName: string) => void;
}

export type CommentType = {
    text: string,
    user: CommentUserType
}

export function CommentItem({children, handleReply, comment}: ICommentItemProps) {
    return (
        <div className={styles.commentItem}>
            <CommentRate/>
            <div className={styles.commentContent}>
                <CommentUser user={comment.user}/>
                <div className={styles.commentText}>
                    {comment.text}
                </div>
                <CommentControls user={comment.user} handleReply={handleReply}/>
                {children}
            </div>
        </div>
    );
}
