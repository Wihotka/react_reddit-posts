import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../store/reducer";
import {CommentForm} from "../CommentForm";
import {Formik, FormikErrors, FormikHelpers, useFormik} from 'formik';
import { createStoreon, StoreonModule } from 'storeon';
import { useStoreon } from 'storeon/react';

export interface ICommentState {
    comment: string
}

export interface ICommentStateEvents {
    'setComment': string
}

export interface ICommentFormContainerProps {
    userName?: string
}

export interface ICommentFormValues {
    comment: string
}

export const commentModule: StoreonModule<ICommentState, ICommentStateEvents> = store => {
    store.on('@init', () => ({ comment: 'Привет из Storeon'}))
    store.on('setComment', (state, event) => ({ comment: event}))
}

const store = createStoreon<ICommentState, ICommentStateEvents>([commentModule])

export function CommentFormContainer({userName}: ICommentFormContainerProps) {
    const { dispatch, comment } = useStoreon<ICommentState, ICommentStateEvents>('comment')
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!!userName && !!ref.current) {
            dispatch('setComment', userName + ', ');
            ref.current.focus();
        }
    }, [userName]);

    function handleChange(setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void){
        return function (event: React.ChangeEvent<HTMLTextAreaElement>) {
            dispatch('setComment', (event.target.value));
            setFieldValue('comment', event.target.value);
        }
    }

    function handleSubmit(values: ICommentFormValues, actions: FormikHelpers<ICommentFormValues>) {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }

    const initialValues: ICommentFormValues = {comment: comment};

    const validate = (values: ICommentFormValues) => {
        let errors: FormikErrors<ICommentFormValues> = {};

        if (values.comment.length <= 3) {
            errors.comment = 'Поле должнобыть болье 3-х символов.';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
            render={({values, errors, touched, setFieldValue}) => (
                <CommentForm
                    innerRef={ref}
                    value={comment}
                    onChange={handleChange(setFieldValue)}
                    errors={errors}
                    touched={touched}
                />
            )}
        />
    )
}
