import React from 'react';
import styles from './cardcontrols.css';
import {Actions} from "./Actions";
import {KarmaCounter} from "./KarmaCounter";
import {Comments} from "./Comments";

export function CardControls() {
  return (
      <div className={styles.controls}>
        <KarmaCounter/>
        <Comments/>
        <Actions/>
      </div>
  );
}
