import React from 'react';
import styles from './textcontent.scss';

interface ITextContentProps<T> {
  text: T;
  postUrl: T;
  user: {
    url: T;
    name: T;
    avatarUrl: T;
    label: T;
  };
  hoursAgo: T;
}

export function TextContent({ text, postUrl, user, hoursAgo }: ITextContentProps<string>) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={user.avatarUrl} alt={user.label} />
          <a href={user.url} className={styles.username}>{user.name}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {hoursAgo} часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href={postUrl} className={styles.postLink}>
          {text}
        </a>
      </h2>
    </div>
  );
}
