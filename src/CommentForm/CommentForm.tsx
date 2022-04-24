import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { commentContext } from '../context/commentContext';
import styles from './commentform.css';

export function CommentForm() {
  const { value, onChange } = useContext(commentContext);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    onChange(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} >
      <textarea className={styles.input} value={value} onChange={handleChange}></textarea>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
