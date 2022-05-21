import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { TRootState } from '../store/reducer';

const defaultContent = {
  iconImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png',
  iconLabel: 'avatar',
  previewImg: 'http://www.smarttimes.co.kr/news/photo/202110/1281_622_3923.png',
  previewLabel: 'photo'
}

export function CardsList() {
  const token = useSelector<TRootState>(state => state.token.data);
  const [posts, setPosts] = useState<any[]>([]);
  const [nextAfter, setNextAfter] = useState('');
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!token) return;
    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/best/', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 5,
            after: nextAfter,
          }
        });
        setNextAfter(after);
        setPosts(prevChildren => prevChildren.concat(...children));
      } catch (error) {
        setErrorLoading(String(error));
      } finally {
        setLoading(false);
        setCounter(counter + 1);
        console.log(counter);
      }
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) load();
    }, {
      rootMargin: '24px',
    });

    if (bottomOfList.current) observer.observe(bottomOfList.current);

    return () => {
      if (bottomOfList.current) observer.unobserve(bottomOfList.current);
    }
  }, [token, bottomOfList.current, nextAfter, counter]);

  function handleClick() {
    setCounter(0);
  }

  const cards = posts.map((post) => {
    const data = post.data;
    return (
      <Card
        key={data.id}
        title={data.title}
        author={data.author}
        postUrl={`https://www.reddit.com${data.permalink}`}
        previewImg={data.thumbnail.length > 10 ? data.thumbnail : defaultContent.previewImg}
        userUrl={`https://www.reddit.com/user/${data.author}`}
        createdAgo={data.created}
        defaultContent={defaultContent}
      />
    );
  });

  return (
    <ul className={styles.cardList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div className={styles.message}>Авторизируйтесь для просмотра ленты.</div>
      )}

      {cards}

      {counter === 2 && (
        <button onClick={handleClick} className={styles.showMore}>Загрузить ещё</button>
      )}
      {counter !== 2 && !loading && !errorLoading && (
        <div ref={bottomOfList} />
      )}

      {loading && (
        <div className={styles.preloader}>
          <div className={styles.loader} />
        </div>
      )}

      {errorLoading && (
        <div role="alert" className={styles.message}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
