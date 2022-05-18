import React, { useEffect } from 'react';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';
import styles from './authblock.css';
import { useUserData } from '../../hooks/useUserData';
import { saveToken } from '../../store/token/actions';
import { useDispatch } from 'react-redux';

export function AuthBlock() {
  const { data, loading } = useUserData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken());
  }, []);


  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=Lu7reIvILvXyevit9ggWHA&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth&scope=identity read submit"
      className={styles.authBlock}
    >
      <div className={styles.avatarBlock}>
        {data.iconImg ?
          <img src={data.iconImg} alt="user avatar" className={styles.avatarImg} /> :
          <Icon name={EIcons.avatar} size={32} />
        }
      </div>

      <div className={styles.username}>
        {loading ? (
          <Text size={20} color={EColor.gray99}>Загрузка...</Text>
        ) : (
          <Text size={20} color={data.name ? EColor.black : EColor.gray99}>{data.name || 'Аноним'}</Text>
        )}
      </div>
    </a>
  );
}
