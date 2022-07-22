import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { TRootState } from "../reducer";
import queryString from 'query-string';

export const SET_TOKEN = 'SET_TOKEN';
export type TSetTokenAction = {
  type: typeof SET_TOKEN;
}
export const setToken: ActionCreator<TSetTokenAction> = () => ({
  type: SET_TOKEN,
});

export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';
export type TSetTokenSuccessAction = {
  type: typeof SET_TOKEN_SUCCESS;
  data: string;
}
export const setTokenSuccess: ActionCreator<TSetTokenSuccessAction> = (data: string) => ({
  type: SET_TOKEN_SUCCESS,
  data,
});

export const saveToken = (): ThunkAction<void, TRootState, unknown, Action<string>> => (dispatch) => {
  dispatch(setToken());
  const url = new URL(window.location.href);
  const urlParams = queryString.parse(url.hash);
  let token: string;

  if (urlParams.access_token) {
    token = urlParams.access_token as string;
    dispatch(setTokenSuccess(token));
    sessionStorage.setItem('token', token);
  } else if (sessionStorage.getItem('token')) {
    token = sessionStorage.getItem('token') as string;
    dispatch(setTokenSuccess(token));
  }
}
