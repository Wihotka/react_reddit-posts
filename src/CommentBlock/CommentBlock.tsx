import React, { useState } from 'react';
import { AnswerForm } from './AnswerForm';
import styles from './commentblock.css';

export function CommentBlock() {
  const defaultComments = [
    {
      id: 1,
      author: 'David Lynch',
      message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium dignissimos sit atque, nam assumenda eaque dicta fuga quo amet voluptate itaque nostrum sapiente consectetur expedita natus modi sint debitis autem?',
    },
    {
      id: 2,
      author: 'Tim Schafer',
      message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum maiores veniam eum adipisci exercitationem? Nam quas earum reprehenderit nisi, culpa amet blanditiis hic eum aperiam, voluptatum dignissimos dolores aut?',
    }
  ];

  const [commentsData, setCommentsData] = useState(defaultComments);

  const comments = commentsData.map((comment) => {
    return (
      <AnswerForm key={comment.id} author={comment.author} message={comment.message} />
    );
  });

  return (
    <div className={styles.commentBlock}>
      <h3 className={styles.mainTitle}>Comments:</h3>
      {comments}
    </div>
  );
}
