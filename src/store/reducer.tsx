import { ActionCreator, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, TMeRequestAction, TMeRequestErrorAction, TMeRequestSuccessAction } from "./me/actions";
import { meReducer, TMeState } from "./me/reducer";
import { TSetTokenAction, TSetTokenSuccessAction, SET_TOKEN, SET_TOKEN_SUCCESS } from "./token/actions";
import { tokenReducer, TTokenState } from "./token/reducer";

export type TPostState = {
  text: string;
  postUrl: string;
}
export type TRootState = {
  commentText: string;
  token: TTokenState;
  me: TMeState,
  post: TPostState,
}
const initialState: TRootState = {
  commentText: 'Hello Skillbox!',
  token: {
    data: '',
  },
  me: {
    loading: false,
    error: '',
    data: {},
  },
  post: {
    text: '',
    postUrl: '',
  },
}
type MyAction = TUpdateCommentAction
| TSetTokenAction
| TSetTokenSuccessAction
| TMeRequestAction
| TMeRequestSuccessAction
| TMeRequestErrorAction
| TSetPostAction;

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type TUpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
}
export const updateComment: ActionCreator<TUpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

const SET_POST = 'SET_POST';
type TSetPostAction = {
  type: typeof SET_POST,
  post: {
    text: string;
    postUrl: string;
  },
}
export const setPost: ActionCreator<TSetPostAction> = (post) => ({
  type: SET_POST,
  post,
});

export const rootReducer: Reducer<TRootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    case SET_TOKEN:
    case SET_TOKEN_SUCCESS:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      }
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    case SET_POST:
      return {
        ...state,
        post: action.post,
      }
    default:
      return state;
  }
}
