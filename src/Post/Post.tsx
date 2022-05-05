import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentBlock } from '../CommentBlock';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';

interface IPostProps {
  title: string;
  postUrl: string;
  onClose?: () => void;
}

export function Post({ title, postUrl, onClose }: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        onClose?.();
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
        <h2 className={styles.title}>{title}</h2>
        <a href={postUrl} className={styles.link}>check full reddit post</a>
        <CommentFormContainer />
        <CommentBlock />
      </div>
    </div>
  ), node);
}
