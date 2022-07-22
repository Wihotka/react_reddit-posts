import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface IDefaultContent {
  iconImg: string;
  iconLabel: string;
  previewImg: string;
  previewLabel: string;
}

interface ICardProps {
  id: string;
  title: string;
  author: string;
  previewImg: string;
  postUrl: string;
  userUrl: string;
  createdAgo: number;
  defaultContent: IDefaultContent;
}

export function Card({
  id,
  title,
  author,
  previewImg,
  postUrl,
  userUrl,
  createdAgo,
  defaultContent
} : ICardProps) {
  const hoursPassed = Math.floor((Date.now() - createdAgo*1000)/(1000*3600));

  return (
    <li className={styles.card}>
      <TextContent
        id={id}
        text={title}
        postUrl={postUrl}
        user={{
          url: userUrl,
          name: author,
          avatarUrl: defaultContent.iconImg,
          label: defaultContent.iconLabel
        }}
        hoursAgo={`${hoursPassed}`}
      />
      <Preview imageUrl={previewImg} label={defaultContent.previewLabel} />
      <Menu />
      <Controls />
    </li>
  );
}
