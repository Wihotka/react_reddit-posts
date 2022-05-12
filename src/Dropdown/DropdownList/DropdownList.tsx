import React from 'react';
import styles from './dropdownlist.css';

interface IDropdownListProps {
  children: React.ReactNode;
  onElemClick: () => void;
}

export function DropdownList({ children, onElemClick }: IDropdownListProps) {
  return (
    <div className={styles.list} onClick={onElemClick}>
      {children}
    </div>
  );
}
