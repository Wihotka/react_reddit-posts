import React, {ChangeEvent, FormEvent, useRef} from 'react';
import styles from './commentform.css';
import {Form, Field, FormikTouched, FormikErrors} from "formik";

interface ICommentFormProps {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    innerRef: React.Ref<HTMLTextAreaElement>
    touched: FormikTouched<any>
    errors: FormikErrors<any>
}

export function CommentForm({value, onChange, innerRef, touched, errors}: ICommentFormProps) {
    return (
        <Form className={styles.form}>
            <Field component="textarea" name="comment" innerRef={innerRef} rows={4} className={styles.input} value={value} onChange={onChange}/>
            {touched.comment && errors.comment && <div>{errors.comment}</div>}
            <button type="submit" className={styles.button}>Комментировать</button>
        </Form>
    );
}
