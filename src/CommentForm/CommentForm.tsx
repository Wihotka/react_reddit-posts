import React, { useState} from 'react';
import styles from './commentform.css';
import { Formik } from 'formik';

// type TCommentFormProps = {
//   value: string;
//   onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
//   onSubmit: (e: FormEvent) => void;
// }

export function CommentForm() {
  const [value, setValue] = useState('');
  // const [touched, setTouched] = useState(false);
  // const [valueError, setValueError] = useState('');

  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   setTouched(true);
  //   setValueError(validateText());

  //   const isFormValid = !validateText();
  //   if (!isFormValid) return;

  //   alert('Форма отправлена');
  // }

  // function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
  //   setValue(e.target.value);
  // }

  // function validateText() {
  //   if (value.length <= 3) return 'Введите больше 3-х символов';
  //   return '';
  // }

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
