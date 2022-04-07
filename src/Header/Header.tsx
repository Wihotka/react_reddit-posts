import React, { useContext } from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';
import { AuthBlock } from './AuthBlock';
import { userContext } from '../context/userContext';

export function Header() {
  const { iconImg, name } = useContext(userContext);

  return (
    <header className={styles.header}>
      <AuthBlock avatarSrc={iconImg} username={name} />
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
