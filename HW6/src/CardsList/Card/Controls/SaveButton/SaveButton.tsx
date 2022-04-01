import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './savebutton.css';

export function SaveButton() {
  return (
    <button className={styles.saveButton}>
      <Icon name={EIcons.save} size={16} />
    </button>
  );
}
