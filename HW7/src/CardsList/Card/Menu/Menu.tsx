import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuItemsList } from './MenuItemsList';
import { generateRandomString } from '../../../utils/react/generateRandomIndex';
import styles from './menu.css';
import { EIcons, Icon } from '../../../Icon';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={<button className={styles.menuButton}>
          <Icon name={EIcons.menu} />
        </button>}
      >
        <MenuItemsList postId={generateRandomString()} />
      </Dropdown>
    </div>
  );
}
