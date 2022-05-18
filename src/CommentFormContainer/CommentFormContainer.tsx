import React, { ChangeEvent, FormEvent} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { CommentForm } from '../CommentForm';
import { TRootState, updateComment } from '../store/reducer';

export function CommentFormContainer() {
  const value = useSelector<TRootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <CommentForm
      // value={value}
      // onChange={handleChange}
      // onSubmit={handleSubmit}
    />
  );
}
