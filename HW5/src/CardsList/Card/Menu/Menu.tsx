import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={<button className={styles.menuButton}>
          <svg width="25px" height="25px" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="#666">
            <circle cx="64" cy="64" r="9.824"/>
            <circle cx="99.25" cy="64" r="9.824"/>
            <circle cx="28.75" cy="64" r="9.824"/>
          </svg>
        </button>}
      >
        <ul className={styles.list}>
          <li>Add</li>
          <li>Hide</li>
        </ul>
      </Dropdown>
      
    </div>
  );
}