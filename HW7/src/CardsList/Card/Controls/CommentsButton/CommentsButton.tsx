import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './commentsbutton.css';

export function CommentsButton() {
  return (
    <button className={styles.commentsButton}>
      <Icon name={EIcons.comments} size={16} />
      <span className={styles.commentsNumber}>13</span>
    </button>
  );
}
