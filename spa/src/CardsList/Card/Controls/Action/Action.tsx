import React from 'react';
import styles from './action.css';

interface IActionProps {
  children?: React.ReactNode;
}

export function Action({ children }: IActionProps) {
  return (
    <div className={styles.action}>
      {children}
    </div>
  );
}
