import React from 'react';
import styles from './menuitemslist.css';
import {IMenuItem, MenuItem} from '../MenuItem'
import {Text} from "../../../../Text";

interface iMenuItemsListProps {
    postId: string,
    items: IMenuItem[]
}

export function MenuItemsList(props: iMenuItemsListProps) {
    const items = props.items;
    const postId = props.postId;
    const menuItems = items.map((item: IMenuItem) =>
        <MenuItem key={item.label} item={item} postId={postId}/>
    );
    return (
        <ul className={styles.menuItemsList}>
            {menuItems}
            <li className={styles.menuItemClose}>
                <Text size={14} mobileSize={12}>Закрыть</Text>
            </li>
        </ul>
    );
}
