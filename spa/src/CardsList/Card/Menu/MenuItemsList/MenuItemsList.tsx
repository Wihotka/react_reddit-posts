import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menuitemslist.css';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItemDesktop} onClick={() => console.log(postId)}>
        <Icon name={EIcons.comments} size={16} />
        <span>Комментарии</span>
      </li>
      <li className={styles.menuItemDesktop} onClick={() => console.log(postId)}>
        <Icon name={EIcons.share} size={18} />
        <span>Поделиться</span>
      </li>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.hide} size={20} />
        <span>Скрыть</span>
      </li>
      <div className={styles.separatorDesktop}></div>
      <li className={styles.menuItemDesktop} onClick={() => console.log(postId)}>
        <Icon name={EIcons.save} size={16} />
        <span>Сохранить</span>
      </li>
      <div className={styles.separator}></div>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.warning} size={18} />
        <span>Пожаловаться</span>
      </li>
      <button className={styles.closeButton}>Закрыть</button>
    </ul>
  );
}
