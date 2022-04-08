import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { Action } from './Action';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton />
      <Action>
        <ShareButton />
        <SaveButton />
      </Action>
    </div>
  );
}
