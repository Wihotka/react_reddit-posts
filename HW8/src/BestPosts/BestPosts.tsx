import React, { useContext } from 'react';
import styles from './bestposts.css';
import { postsContext } from '../context/postsContext';

export function BestPosts() {
  const bestPosts = useContext(postsContext);

  console.log(bestPosts);

  return (
    <ul>
      
    </ul>
  );
}
