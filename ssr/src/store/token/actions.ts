import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";

export const TOKEN_REQUEST = 'TOKEN_REQUEST'
export type TokenRequestAction = {
    type: typeof TOKEN_REQUEST;
}
export const tokenRequest: ActionCreator<TokenRequestAction> = () => ({type: TOKEN_REQUEST})

export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS'
export type TokenRequestSuccessAction = {
    type: typeof TOKEN_REQUEST_SUCCESS;
    token: string
}
export const tokenRequestSuccess: ActionCreator<TokenRequestSuccessAction> = (token) => ({
    type: TOKEN_REQUEST_SUCCESS,
    token
})

export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR'
export type TokenRequestErrorAction = {
    type: typeof TOKEN_REQUEST_ERROR;
    error: string
}
export const tokenRequestError: ActionCreator<TokenRequestErrorAction> = (error: string) => ({
    type: TOKEN_REQUEST_ERROR,
    error
})

export const tokenRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(tokenRequest());

    let parseToken = new Promise((resolve, reject) => {
        let token = sessionStorage.getItem('token') ?? '';
        let urlHash = window.location.hash.substring(1);
        let queryVars = urlHash.split('&');

        for (let queryVar of queryVars) {
            let pair = queryVar.split('=');

            if (pair[0] === 'access_token') {
                token = pair[1];
                sessionStorage.setItem('token', token);
            }
        }

        !!token ? resolve(token) : reject('no token');
    });

    parseToken
        .then(token => dispatch(tokenRequestSuccess(token)))
        .catch(error => dispatch(tokenRequestError(error)))
}
