import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdownlist.css';

interface IDropdownListProps {
  children: React.ReactNode;
  onElemClick: () => void;
}

export function DropdownList({ children, onElemClick }: IDropdownListProps) {
  const node = document.querySelector('#dropdown-root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.list} onClick={onElemClick}>
      {children}
    </div>
  ), node);
}
