import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CommentBlock } from '../CommentBlock';
import { CommentForm } from '../CommentForm';
import { TPostState, TRootState } from '../store/reducer';
import styles from './post.css';

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const post: TPostState = useSelector<TRootState>(state => state.post) as TPostState;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        history.push('/posts');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal-root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.background}>
      <div className={styles.modal} ref={ref}>
        <h2 className={styles.title}>{post.text}</h2>
        <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>check full reddit post</a>
        <CommentForm />
        <CommentBlock />
      </div>
    </div>
  ), node);
}
