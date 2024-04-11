import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authState } from '../reducers/authenticate.reducers';



interface appAuthState {
    usernameFC: string;
    passwordFC: string;
    isSuccess: boolean;
    isError: boolean;
}
export interface appState {
    authStore: appAuthState;
}

const store = (state: appState) => state.authStore;

const isSuccessSelector = createSelector(store, (s) => s.isSuccess);
const isErrorSelector = createSelector(store, (s) => s.isError);


export { isErrorSelector, isSuccessSelector };



// export const selectAuthState = createFeatureSelector<authState>('auth');

// export const isSuccessSelector = createSelector(
//     selectAuthState,
//     (state: authState) => state.isSuccess
// );

// export const isErrorSelector = createSelector(
//     selectAuthState,
//     (state: authState) => state.isError
// );