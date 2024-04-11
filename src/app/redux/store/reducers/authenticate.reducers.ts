import { createReducer, on } from '@ngrx/store';

import { onLoginAction, onLoginFailureAction, onLoginSuccessAction } from '../actions';


export interface authState {
    usernameFC: string;
    passwordFC: string;
    isSuccess: boolean;
    isError: boolean;
}

const initialState: authState = {
    usernameFC: '',
    passwordFC: '',
    isSuccess: false,
    isError: false
};

export const authReducer = createReducer<authState>(initialState,
    on(onLoginAction, (state, action) => {
        return {
            ...state,
        };
    }),
    on(onLoginSuccessAction, (state, action) => {
        return {
            ...state,
            isSuccess: action.isSuccess,
            isError: false
        };
    }),
    on(onLoginFailureAction, (state, action) => {
        return {
            ...state,
            isError: action.isError,
            isSuccess: false
        };
    })
);