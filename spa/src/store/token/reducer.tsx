import { Reducer } from "react";
import { SET_TOKEN, SET_TOKEN_SUCCESS, TSetTokenAction, TSetTokenSuccessAction } from "./actions";

export type TTokenState = {
  data: string;
}
type TTokenActions = TSetTokenAction | TSetTokenSuccessAction;

export const tokenReducer: Reducer<TTokenState, TTokenActions> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
      }
    case SET_TOKEN_SUCCESS:
      return {
        ...state,
        data: action.data,
      }
    default:
      return state;
  }
}
