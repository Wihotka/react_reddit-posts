import React from 'react';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';
import styles from './authblock.css';

interface IAuthBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function AuthBlock({ avatarSrc, username }: IAuthBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=Lu7reIvILvXyevit9ggWHA&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity"
      className={styles.authBlock}
    >
      <div className={styles.avatarBlock}>
        {avatarSrc ?
          <img src={avatarSrc} alt="user avatar" className={styles.avatarImg} /> :
          <Icon name={EIcons.avatar} size={32} />
        }
      </div>

      <div className={styles.username}>
        <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
