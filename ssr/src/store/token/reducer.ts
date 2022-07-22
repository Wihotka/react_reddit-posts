import {Reducer} from "react";
import {
    TOKEN_REQUEST,
    TOKEN_REQUEST_ERROR,
    TOKEN_REQUEST_SUCCESS,
    TokenRequestAction, TokenRequestErrorAction,
    TokenRequestSuccessAction
} from "./actions";

export type TokenState = {
    loading: boolean;
    error: string;
    token: string;
}

type TokenActions = TokenRequestAction | TokenRequestSuccessAction | TokenRequestErrorAction;

export const tokenReducer: Reducer<TokenState, TokenActions> = (state, action) => {
    switch (action.type) {
        case TOKEN_REQUEST: {
            return {
                ...state,
                loading: true
            };
        }
        case TOKEN_REQUEST_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        case TOKEN_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                token: action.token
            }
        }
        default:
            return state;
    }
}
