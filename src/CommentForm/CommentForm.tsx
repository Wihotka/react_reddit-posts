import React, { ChangeEvent, FormEvent} from 'react';
import styles from './commentform.css';

type TCommentFormProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

export function CommentForm({ value, onChange, onSubmit }: TCommentFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit} >
      <textarea className={styles.input} value={value} onChange={onChange}></textarea>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
