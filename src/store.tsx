import { ActionCreator, AnyAction, Reducer } from "redux";

export type TRootState = {
  commentText: string;
  token: string;
}
const initialState: TRootState = {
  commentText: 'Hello Skillbox!',
  token: '',
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

const SET_TOKEN = 'SET_TOKEN';
export const setToken: ActionCreator<AnyAction> = (text) => ({
  type: SET_TOKEN,
  text,
});

export const rootReducer: Reducer<TRootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.text,
      }
    default:
      return state;
  }
}
