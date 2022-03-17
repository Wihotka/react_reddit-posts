import React from 'react';
import styles from './preview.scss';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo" />
    </div>
  );
}
