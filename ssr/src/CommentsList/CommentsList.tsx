import React, {useState} from 'react';
import styles from './commentslist.css';
import {CommentItem} from "./CommentItem";
import {CommentForm} from "../CommentForm";
import {CommentFormContainer} from "../CommentFormContainer";

export function CommentsList() {
    const [isCommentForm, setIsCommentForm] = useState(false);
    const [replyToUser, setReplyToUser] = useState('');

    function onReply(userName: string) {
        setReplyToUser(userName);
        setIsCommentForm(true);
    }

    return (
        <>
            {isCommentForm && (
                <CommentFormContainer userName={replyToUser}/>
            )}
            <div className={styles.commentsList}>
                <CommentItem handleReply={onReply} comment={{
                    user: {
                        avatar: 'https://picsum.photos/200',
                        name: 'Михаил Рогов',
                        lastLogin: '1 день назад',
                        groupName: 'Лига юристов'
                    },
                    text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.',
                }}>
                    <CommentItem handleReply={onReply} comment={{
                        user: {
                            avatar: 'https://picsum.photos/200',
                            name: 'Сергей Рогов',
                            lastLogin: '1 день назад',
                            groupName: 'Лига юристов'
                        },
                        text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.'
                    }}>
                        <CommentItem handleReply={onReply} comment={{
                            user: {
                                avatar: 'https://picsum.photos/200',
                                name: 'Андрей Рогов',
                                lastLogin: '1 день назад',
                                groupName: 'Лига юристов'
                            },
                            text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.'
                        }}/>
                    </CommentItem>
                    <CommentItem handleReply={onReply} comment={{
                        user: {
                            avatar: 'https://picsum.photos/200',
                            name: 'Михаил Рогов',
                            lastLogin: '1 день назад',
                            groupName: 'Лига юристов'
                        },
                        text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.'
                    }}/>
                </CommentItem>
                <CommentItem handleReply={onReply} comment={{
                    user: {
                        avatar: 'https://picsum.photos/200',
                        name: 'Михаил Рогов',
                        lastLogin: '1 день назад',
                        groupName: 'Лига юристов'
                    },
                    text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.'
                }}/>
            </div>
        </>
    );
}
