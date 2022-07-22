import {ActionCreator, AnyAction, Reducer} from "redux";
import {
    IUserData,
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAction,
    MeRequestErrorAction,
    MeRequestSuccessAction
} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";
import {TOKEN_REQUEST, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS} from "./token/actions";
import {tokenReducer, TokenState} from "./token/reducer";
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export type RootState = {
    commentText: string;
    token: TokenState;
    me: MeState;
}

const initialState: RootState = {
    commentText: 'Привет, Skillbox!',
    token: {
        loading: false,
        error: '',
        token: '',
    },
    me: {
        loading: false,
        error: '',
        data: {}
    }
}

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

type MyAction = MeRequestAction | MeRequestErrorAction | MeRequestSuccessAction;

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case TOKEN_REQUEST:
        case TOKEN_REQUEST_SUCCESS:
        case TOKEN_REQUEST_ERROR:
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
        default:
            return state;
    }
}
