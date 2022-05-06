import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';
import { AuthBlock } from './AuthBlock';

export function Header() {
  return (
    <header className={styles.header}>
      <AuthBlock />
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
