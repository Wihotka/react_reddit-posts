import React, { useContext } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { postsContext } from '../context/postsContext';

const defaultContent = {
  iconImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png',
  iconLabel: 'avatar',
  previewImg: 'http://www.smarttimes.co.kr/news/photo/202110/1281_622_3923.png',
  previewLabel: 'photo'
}

export function CardsList() {
  const data = useContext(postsContext);
  let cards;

  if (Array.isArray(data)) {
    cards = data.map((elem) => {
      return (
        <Card
          key={elem.id}
          title={elem.title}
          author={elem.author}
          postUrl={`https://www.reddit.com${elem.permalink}`}
          previewImg={elem.thumbnail.length > 10 ? elem.thumbnail : defaultContent.previewImg}
          userUrl={`https://www.reddit.com/user/${elem.author}`}
          createdAgo={elem.created}
          defaultContent={defaultContent}
        />
      );
    });
  }

  return <ul className={styles.cardList}>{cards}</ul>
}
