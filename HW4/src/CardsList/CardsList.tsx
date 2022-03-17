import React from 'react';
import styles from './cardslist.scss';
import { Card } from './Card';

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}
