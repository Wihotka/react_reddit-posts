import React from 'react';
import styles from './card.scss';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';


interface ICardProps {
  content: Array<string>;
}

export function Card({ content } : ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent 
        text={content[0]}
        postUrl={content[1]}
        user={{
          url: content[2],
          name: content[3],
          avatarUrl: content[4],
          label: content[5]
        }}
        hoursAgo={content[6]}
      />
      <Preview imageUrl={content[7]} label={content[8]} />
      <Menu />
      <Controls />
    </li>
  );
}
