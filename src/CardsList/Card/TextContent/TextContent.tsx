import React, { useState } from 'react';
import styles from './textcontent.css';

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
  const [isModalOpened, setIsModalOpened] = useState(false);

  let hourText = 'часов';
  switch (hoursAgo) {
    case '1':
    case '21':
      hourText = 'час';
    case '2':
    case '3':
    case '4':
    case '22':
    case '23':
    case '24':
      hourText = 'часа';
  }

  return (
    <div className={styles.textContent}>
      <a href={postUrl} className={styles.postLink} onClick={ () => setIsModalOpened(true) }></a>

      {isModalOpened && (
        <div>Открытый пост</div>
      )}

      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={user.avatarUrl} alt={user.label} />
          <a href={user.url} className={styles.username}>{user.name}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {hoursAgo} {hourText} назад
        </span>
      </div>
      <h2 className={styles.title}>
        {text}
      </h2>
    </div>
  );
}
