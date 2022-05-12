import React from 'react';
import styles from './sortblock.css';
import { Dropdown } from '../../Dropdown';
import { GenericList } from '../../GenericList';
import { generateRandomString } from '../../utils/react/generateRandomIndex';
import { merge } from '../../utils/js/merge';

const LIST = [
  {As: 'li' as const, text: 'Razputin Aquato' },
  {As: 'li' as const, text: 'Lili Zanotto' },
  {As: 'li' as const, text: 'Bobby Zilch' },
  {As: 'li' as const, text: 'Dogen Boole' },
  {As: 'li' as const, text: 'Mikhail Bulgakov' },
  {As: 'li' as const, text: 'Chloe Barge' },
  {As: 'li' as const, text: 'Clem Foote' }
].map((item) => ({ ...item, id:generateRandomString() }));

export function SortBlock() {
  const handleItemClick = (id: string) => {
    console.log(id);
  }

  return (
    <div className={styles.sortContainer}>
      <Dropdown
        button={<button className={styles.sortBtn}>Dropdown</button>}
      >
        <ul className={styles.list}>
          <GenericList list={LIST.map(merge({ onClick: handleItemClick }))} />
        </ul>
      </Dropdown>
    </div>
  );
}
