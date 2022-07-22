import React from 'react';
import styles from './commentform.css';
import { Formik } from 'formik';

export function CommentForm() {
  return (
    <Formik
      initialValues={{ text: '' }}
      validate={values => {
        const errors: any = {};
        if (values.text.length <= 3) errors.text = 'Введите больше 3-х символов';
        return errors;
      }}
      onSubmit={(values) => {
        console.log('SUBMIT', values);
        alert('Форма отправлена');
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
      }) => (
        <form className={styles.form} onSubmit={handleSubmit} >
          <label htmlFor={'text'} className={styles.label}>Комментировать:</label>
          <textarea
            className={styles.input}
            name={'text'}
            value={values.text}
            onChange={handleChange}
            aria-invalid={errors.text ? 'true' : undefined}
          ></textarea>
          {touched.text && errors.text && (<p className={styles.error}>{errors.text}</p>)}
          <button type="submit" className={styles.button}>Комментировать</button>
        </form>
      )}
    </Formik>
  );
}
