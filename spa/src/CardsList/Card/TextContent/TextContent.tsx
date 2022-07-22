import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { Post } from '../../../Post';
import { setPost } from '../../../store/reducer';
import styles from './textcontent.css';

interface ITextContentProps<T> {
  id: T;
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

export function TextContent({ id, text, postUrl, user, hoursAgo }: ITextContentProps<string>) {
  const [urlPath, setUrlPath] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setUrlPath(window.location.pathname);
    if (urlPath === '/posts/' + id) dispatch(setPost({text, postUrl}));
  }, [urlPath]);

  function handleClick() {
    dispatch(setPost({text, postUrl}));
    setUrlPath('/posts/' + id);
  }

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
      <Link to={'/posts/' + id} onClick={handleClick} className={styles.postLink} />
      {urlPath === '/posts/' + id && (<Route path="/posts/:id" component={Post} />)}
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
