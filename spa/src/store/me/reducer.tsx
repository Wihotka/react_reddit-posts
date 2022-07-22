import { Reducer } from "react";
import { TMeRequestAction, TMeRequestSuccessAction, TMeRequestErrorAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, IUserData } from "./actions";

export type TMeState = {
  loading: boolean;
  error: string;
  data: IUserData;
}
type TMeActions = TMeRequestAction | TMeRequestSuccessAction | TMeRequestErrorAction;

export const meReducer: Reducer<TMeState, TMeActions> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    default:
      return state;
  }
}
