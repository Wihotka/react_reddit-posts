import React from 'react';
import styles from './cardslist.scss';
import { Card } from './Card';

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
  return (
    <ul className={styles.cardsList}>
      <Card content={contentApi} />
    </ul>
  );
}
