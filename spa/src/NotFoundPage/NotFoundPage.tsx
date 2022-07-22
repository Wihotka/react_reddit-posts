import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notfoundpage.css';

export function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ошибка 404</h2>
      <p className={styles.text}>Кажется что-то пошло не так! Страница, которую вы запрашивали, не существует. Возможно она устарела, была удалена, или был введён неверный адрес в адресной строке.</p>
      <Link to="/posts" className={styles.link}>Перейти на главную</Link>
    </div>
  );
}
