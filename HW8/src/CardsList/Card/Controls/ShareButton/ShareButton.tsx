import React from 'react';
import {EIcons, Icon } from '../../../../Icon';
import styles from './sharebutton.css';

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <Icon name={EIcons.share} size={18} />
    </button>
  );
}
