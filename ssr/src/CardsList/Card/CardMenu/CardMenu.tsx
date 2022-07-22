import React from 'react';
import styles from './cardmenu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../Icons";
import {MenuItemsList} from "./MenuItemsList";
import {IMenuItem} from "./MenuItem";



const MENU_ITEMS: IMenuItem[] = [
    {
        label: 'Комментарии',
        mobile: false,
        icon: 'CommentIcon',
    },
    {
        label: 'Поделиться',
        mobile: false,
        icon: 'ShareIcon',
    },
    {
        label: 'Скрыть',
        mobile: true,
        icon: 'HideIcon',
    },
    {
        label: 'Сохранить',
        mobile: false,
        icon: 'SaveIcon'
    },
    {
        label: 'Пожаловаться',
        mobile: true,
        icon: 'ReportIcon'
    }
]

export function CardMenu() {
    return (
        <div className={styles.menu}>
            <Dropdown button={
                <button className={styles.menuButton}>
                    <MenuIcon/>
                </button>
            }>
                <MenuItemsList items={MENU_ITEMS} postId={'1234'}/>
            </Dropdown>
        </div>
    );
}
