import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styles from './answerform.css';

interface IAnswerFormProps {
  author: string;
  message: string;
}

export function AnswerForm({author, message}: IAnswerFormProps) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [value, onChange] = useState('');

  const ref = useRef<HTMLInputElement>(null);

  function handleAnswer() {
    setIsAnswered(true);
    setTimeout(() => {
      ref.current?.focus();
    }, 0);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(value);
    // console.log(ref.current?.value);
  }

  function handleFocus() {
    onChange(author + ', ');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className={styles.comment}>
      <h4 className={styles.author}>{author}</h4>
      <p className={styles.message}>{message}</p>
      <button className={styles.button} onClick={handleAnswer}>Ответить</button>
      {isAnswered &&
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" className={styles.input} ref={ref} value={value} onFocus={handleFocus} onChange={handleChange} />
          <button className={styles.button}>Ответить</button>
        </form>
      }
    </div>
  );

  // return (
  //   <div className={styles.comment}>
  //     <h4 className={styles.author}>{author}</h4>
  //     <p className={styles.message}>{message}</p>
  //     <button className={styles.button} onClick={handleAnswer}>Ответить</button>
  //     {isAnswered &&
  //       <form className={styles.form} onSubmit={handleSubmit}>
  //         <input type="text" className={styles.input} ref={ref} defaultValue={author + ', '} onFocus={handleFocus} />
  //         <button className={styles.button}>Ответить</button>
  //       </form>
  //     }
  //   </div>
  // );
}
