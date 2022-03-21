import React from 'react';
import styles from './preview.scss';

interface IPreviewProps<T> {
  imageUrl: T;
  label: T;
}

export function Preview({ imageUrl, label }: IPreviewProps<string>) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={imageUrl} alt={label} />
    </div>
  );
}
