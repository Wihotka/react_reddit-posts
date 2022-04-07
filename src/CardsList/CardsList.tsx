import React, { useContext } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { postsContext } from '../context/postsContext';

const contentApi = [
  'Следует отметить, что новая модель организованной деятельности',
  '#post-url',
  '#user-url',
  'Дмитрий Гришин',
  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png',
  'avatar',
  '4',
  'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'photo'
];

export function CardsList() { 
  const data = useContext(postsContext);
  const cards = data.map((elem) => {
    return (
      <li key={elem.postId} className={styles.card}>
        <Card content={contentApi} />
      </li>
    );
  });

  return <ul className={styles.cardList}>{cards}</ul>
}
